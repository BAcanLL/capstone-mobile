export const COLORS = {
  green: '#3ADEB7',
  lightGreen: '#70EFB9',
  blue: '#54CCFF',
  red: '#FF8989',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#C4C4C4',
  lightGrey: '#F2F2F2',
  darkGrey: '#5F5F5F',
};

COLORS.primary = COLORS.green;
COLORS.highlight = COLORS.lightGreen;

export const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

export const rgbToHex = (r, g, b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export const hexToRgb = (hex) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

// simulate "filter: brightness(b)" for solid colors
export const brightness = (c, b) => {
  const brightness = b > 1 ? 1 : b < 0 ? 0 : b;
  const color = hexToRgb(c);
  color.r = Math.round(color.r * brightness);
  color.g = Math.round(color.g * brightness);
  color.b = Math.round(color.b * brightness);
  return rgbToHex(color.r, color.g, color.b);
};
