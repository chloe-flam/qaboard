export const iiif_url = (output_dir_url, path) => {
  // remove the URL's leading "/s"
  let identifier = output_dir_url.replace(/\/*?s\//, "")
  // IIIF specs require encoding the slashes inside the identifier
  identifier = `${identifier}/${encodeURI(decodeURIComponent(path))}`.replace(/\//g, '%2F');
  let is_cde_file = identifier.endsWith('dng') || identifier.endsWith('raw') || identifier.endsWith('hex')
  let endpoint = is_cde_file
    ? `${window.location.protocol}//${window.location.hostname}:8186/fcgi-bin/iipsrv.fcgi?IIIF=`
    : `${window.location.protocol}//${window.location.hostname}:8183/iiif/2/`
  if (process.env.NODE_ENV !== 'production') {
    endpoint = "/iiif/2/"
  }
  // we expect that everything is already URL encoded
  // identifier = encodeURIComponent(identifier)
  let url = `${endpoint}${identifier}`
  return url
}



export const is_image = visualization => {
  const { type='', path } = visualization;
  if (type.startsWith('image'))
    return true;
  if (path === undefined)
    return false;
  return path.endsWith('png') ||
         path.endsWith('jpg') ||
         path.endsWith('jpeg')||
         path.endsWith('bmp') ||
         path.endsWith('pdf') ||
         path.endsWith('tif') ||
         path.endsWith('tiff');
}