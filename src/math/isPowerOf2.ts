/**
 * Given an integer number find out if it is a power of 2.
 *
 * Bitwise solution: number & (number - 1)
 *
 * Explanation:
 *
 * 1: 0001
 * 2: 0010
 * 4: 0100
 * 8: 1000
 * Lets take 7:
 *
 * 7: 0111
 *
 * 8 & (8 - 1) = 1000 & 0111 = 0 
 * 
 * @param {number} value - a numeric integer value
 */
const isPowerOf2 = (value: number) => (value & (value - 1)) === 0;

export default isPowerOf2;