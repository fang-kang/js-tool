/**
 * 随机hex颜色
 * @returns
 */
export function randomHexColor(): string {
  return `#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`;
}
