const videoExtension = [
  '3g2',
  '3gp',
  'aaf',
  'asf',
  'avchd',
  'avi',
  'drc',
  'flv',
  'm2v',
  'm3u8',
  'm4p',
  'm4v',
  'mkv',
  'mng',
  'mov',
  'mp2',
  'mp4',
  'mpe',
  'mpeg',
  'mpg',
  'mpv',
  'mxf',
  'nsv',
  'ogg',
  'ogv',
  'qt',
  'rm',
  'rmvb',
  'roq',
  'svi',
  'vob',
  'webm',
  'wmv',
  'yuv',
];

/**
 * 判断是否是video
 */
export function isVideo(filepath: string) {
  const last = filepath.lastIndexOf('.') + 1;
  return videoExtension.includes(filepath.slice(last, filepath.length).toLowerCase());
}
