/**
 * Sort the integers in ascending order by their number of 1's in their binary
 * representation.
 * Example: 710 -> 1011000110 (the number of 1's is 5) 
 * 
 * @param {array} values - array of positive integers 
 */
export default function sortByBinaryOnes(values: number[]) {
    values.sort((a, b) => {

        const countOnes = (binary: number) => {
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