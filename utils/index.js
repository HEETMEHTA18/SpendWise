/**
 * Formats a number into a human-readable string with suffixes (e.g., 1K, 1.5M).
 * @param {number} num - The number to format.
 * @returns {string} - The formatted number as a string.
 */

const formatNumber = (num) => {
  const safeNum = Number(num);

  if (isNaN(safeNum)) return "0";

  if (safeNum >= 1e9) {
    return (safeNum / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (safeNum >= 1e6) {
    return (safeNum / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (safeNum >= 1e3) {
    return (safeNum / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return safeNum.toString();
};
  
  export default formatNumber;