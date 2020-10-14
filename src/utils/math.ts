/**
 * converts degree to radians
 * @param degree
 * @returns {number}
 */
const toRadians = function (degree: number): number {
  return degree * (Math.PI / 180);
};

/**
 * Converts radian to degree
 * @param radians
 * @returns {number}
 */
const toDegree = function (radians: number): number {
  return radians * (180 / Math.PI);
};

/**
 * Rounds a number mathematical correct to the number of decimals
 * @param number
 * @param decimals (optional, default: 5)
 * @returns {number}
 */
const roundNumber = function (number: number, decimals: number = 5): number {
  return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

interface TrigonometryMath {
  sin(number: number): number;
  cos(number: number): number;
  tan(number: number): number;
  asin(number: number): number;
  acos(number: number): number;
  atan(number: number): number;
}

export default <TrigonometryMath>{
  sin: function (number: number): number {
    return roundNumber(Math.sin(toRadians(number)));
  },
  cos: function (number: number): number {
    return roundNumber(Math.cos(toRadians(number)));
  },
  tan: function (number: number): number {
    return roundNumber(Math.tan(toRadians(number)));
  },
  asin: function (number: number): number {
    return roundNumber(toDegree(Math.asin(number)));
  },
  acos: function (number: number): number {
    return roundNumber(toDegree(Math.acos(number)));
  },
  atan: function (number: number): number {
    return roundNumber(toDegree(Math.atan(number)));
  },
};
