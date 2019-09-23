export const breakPoint = {
  wide: 768 + 1,
};
export const wide = `@media (min-width: ${breakPoint.wide}px)`;

export const headerHeight = '64px';
export const underFirstView = '64px';
export const colors = {
  black: '#212121',
  gray: '#c4c4c4',
  wood: '#BEA992',
  firstViewBg: 'rgba(37, 34, 190, 0.2)',
};
export const weights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const hexToRgb = (hex) => {
  // http://stackoverflow.com/a/5624139
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
};

export const rgba = (hex, alpha) => {
  const color = hexToRgb(hex);
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};

export const marginHorizontal = {
  base: -1234, // not used
  wide: 160,
};
