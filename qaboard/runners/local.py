import os
import subprocess
from pathlib import Path
from typing import Optional, List, Dict, Any

from .job import Job
from ..run import RunContext


class LocalRunner():
  type = "local"

  def __init__(self, run_context : RunContext):
    self.run_context = run_context


  def start(self, blocking=True, cwd=Path()):
    pipe = subprocess.PIPE
    with subprocess.Popen(self.run_context.command, shell=True,
                          encoding='utf-8',
                          # Avoid issues with code outputing malformed unicode
                          # https://docs.python.org/3/library/codecs.html#error-handlers
                          errors='surrogateescape',
                          cwd=self.run_context.job_options['cwd'],
                          stdout=pipe, stderr=pipe) as process:
      for line in process.stdout:
        print(line, end='')
      process.wait()
      return process.returncode

  @staticmethod
  def start_jobs(jobs: List[Job], job_options: Optional[Dict[str, Any]] = None, blocking=True):
      if not blocking:
        click.secho(f'WARNING: We currently dont support non-blocking local runs.', fg='yellow', err=True)

      from joblib import Parallel, delayed
      # multiprocessing will try to reimport qaboard, which relies on the CWD
      cwd = os.getcwd()
      if 'cwd' in job_options:
        os.chdir(job_options['cwd'])
      Parallel(
        n_jobs=job_options.get('concurrency', 0),
        verbose=int(os.environ.get('QA_BATCH_VERBOSE', 0)),
      )(delayed(lambda j: j.start())(j) for j in jobs)
      os.chdir(cwd)


  @staticmethod
  def stop_jobs(jobs: List[Job], job_options: Optional[Dict[str, Any]] = None):
    return NotImplementedError