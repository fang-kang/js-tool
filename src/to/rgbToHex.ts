import { trim } from '../string';

/**
 * rgb转Hex
 * @example console.log(rgbToHex('rgb(255,255,255)')) // #ffffff
 * @param style
 * @returns
 */
export function rgbToHex(style: string) {
  const reg = /rgb\(([\w\s,]+)\)/;

  const matcher = style.match(reg);
  if (!matcher) return;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, color] = matcher;
  const [r, g, b] = trim(color, 'all').split(',');

  return `#${((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1)}`;
}
