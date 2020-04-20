/**
 * Sort the integers in ascending order by their number of 1's in their binary
 * representation.
 * Example: 710 -> 1011000110 (the number of 1's is 5) 
 * 
 * @param {array} values - array of positive integers 
 */
const sortByBinaryOnes = values => {
    values.sort((a, b) => {

        const countOnes = binary => {
            let count = 0;
            while (binary > 0) {
                count += (binary & 1);
                binary >>= 1;
            }
            return count;
        };

        const onesInA = countOnes(a);
        const onesInB = countOnes(b);
        
        if (onesInA === onesInB) {
            return a - b;
        }

        return onesInA - onesInB;
    });
};

module.exports = sortByBinaryOnes;