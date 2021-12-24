/**
 * converts degree to radians
 * @param degree
 * @returns {number}
 */
const toRadians = function (degree) {
    return degree * (Math.PI / 180);
};
/**
 * Converts radian to degree
 * @param radians
 * @returns {number}
 */
const toDegree = function (radians) {
    return radians * (180 / Math.PI);
};
/**
 * Rounds a number mathematical correct to the number of decimals
 * @param number
 * @param decimals (optional, default: 5)
 * @returns {number}
 */
const roundNumber = function (number, decimals = 5) {
    return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
};
export default {
    sin: function (number) {
        return roundNumber(Math.sin(toRadians(number)));
    },
    cos: function (number) {
        return roundNumber(Math.cos(toRadians(number)));
    },
    tan: function (number) {
        return roundNumber(Math.tan(toRadians(number)));
    },
    asin: function (number) {
        return roundNumber(toDegree(Math.asin(number)));
    },
    acos: function (number) {
        return roundNumber(toDegree(Math.acos(number)));
    },
    atan: function (number) {
        return roundNumber(toDegree(Math.atan(number)));
    },
};
