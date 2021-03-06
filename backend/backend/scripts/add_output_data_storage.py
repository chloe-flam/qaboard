"""
python add_storage_info.py


- run staging
- deloy new cli
- run on prod
- migrate json->jsonb
- sql!
"""
import json
import time
import datetime

from sqlalchemy.orm.attributes import flag_modified
from qaboard.utils import total_storage, save_outputs_manifest

from backend.models import Output
from backend.database import db_session, Session

db_session.autoflush = False


db_session
batch_size = 1_000
output_total = 1_700_000 # est.


start = time.time()
print('Adding storage info')


def get_storage(output):
  manifest_path = output.output_dir / 'manifest.outputs.json'
  if not manifest_path.exists():
    if not output.output_dir.exists():
      return 0
    else:
      manifest = save_outputs_manifest(output.output_dir)
  else:
    with manifest_path.open() as f:
      try:
        manifest = json.load(f)
      except: # hello corrupted file
        manifest = save_outputs_manifest(output.output_dir)
  return total_storage(manifest)


def migrate():
  batch = []
  batch_size =         500
  output_total = 1_700_000
  start_batch  = time.time()
  outputs = (db_session.query(Output)
             .yield_per(batch_size)
             .enable_eagerloads(False)
             .order_by(Output.created_date.desc())
  )
  for idx, o in enumerate(outputs):
      if o.is_pending:
        continue
      if o.data.get('storage'):
        continue

      storage = get_storage(o)
      if storage is None:
        continue
      batch.append({
        "id": o.id,
        "data": {
          **o.data,
          "storage": storage,
        }, 
      })
      if idx % batch_size == 0:
          print(o)
          now = time.time()
          print(f"{idx/output_total:.1%} [{batch_size/(now - start_batch):.1f}/s] [est. total left {(now - start_batch) * ((output_total-idx)/batch_size) / 3600:.2f}h] [elapsed time: {now - start:.1f}s]")
          start_batch = now
          db_session.bulk_update_mappings(Output, batch)
          db_session.flush()
          batch = []

  print(f"DONE, now committing configurations [elapsed time: {now - start:.1f}s]")
  db_session.bulk_update_mappings(Output, batch)
  db_session.flush()
  db_session.commit()



migrate()

exit(0)




print("Starting migration")
def query(since):
  print(since)
  return (db_session.query(Output)
          .enable_eagerloads(False)
          .filter(Output.created_date > since)
          .order_by(Output.created_date.desc())
          # .limit(batch_size)
          # .all()
          # .yield_per(batch_size)
  )

print("Starting updates")
most_recent = datetime.datetime.now() - datetime.timedelta(days=7)
for idx, output in enumerate(query(most_recent)):
  if output.is_pending:
    continue
  if output.data.get('storage'):
    continue

  manifest_path = output.output_dir / 'manifest.outputs.json'
  if not manifest_path.exists():
    if not output.output_dir.exists():
      output.data['storage'] = 0
      db_session.add(output)
      flag_modified(output, "data")
      continue
    else:
      manifest = save_outputs_manifest(output.output_dir)
  else:
    with manifest_path.open() as f:
      manifest = json.load(f)

  output.data['storage'] = total_storage(manifest)
  flag_modified(output, "data")
  db_session.add(output)

  if idx % batch_size == 0:
    print(f"{idx/output_total:.1%}", output, f"{output.data['storage']/1024/1024:.01f} MB")


db_session.commit()
