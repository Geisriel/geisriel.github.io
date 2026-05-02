/*

*/

/**
 * Interpolates between two hex colors based on a factor value.
 *
 * @param color1 - The starting color in hex format (e.g., "#ff0000")
 * @param color2 - The ending color in hex format (e.g., "#0000ff")
 * @param factor - A number between 0 and 1 representing the interpolation point
 *                (0 = color1, 1 = color2, 0.5 = halfway between)
 * @returns A hex color string representing the interpolated color
 *
 * @example
 * ```ts
 * interpolateColor("#ff0000", "#0000ff", 0.5) // Returns "#800080"
 * ```
 */
export const interpolateColor = (
  color1: string,
  color2: string,
  factor: number
) => {
  const c1 = color1.match(/\w\w/g)?.map((hex) => parseInt(hex, 16)) || [
    0, 0, 0,
  ];
  const c2 = color2.match(/\w\w/g)?.map((hex) => parseInt(hex, 16)) || [
    0, 0, 0,
  ];

  const result = c1
    .map((start, i) => {
      const end = c2[i];
      const interpolated = Math.round(start + (end - start) * factor);
      return interpolated.toString(16).padStart(2, "0");
    })
    .join("");

  return `#${result}`;
};

export default interpolateColor;
