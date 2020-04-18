/**
 * Check if the order of paranthesises is balanced.
 * @param {string} str: should contain only paranthesis () characters.
 */
const isParanthesisOrderBalanced = str => {
    let balanceValue = 0;
    for (let c of str) {
        switch (c) {
            case '(':
                balanceValue++;
                break;
            case ')':
                balanceValue--;
                break;
        }
        if (balanceValue < 0) {
            return false;
        }
    }
    return balanceValue == 0;
};

module.exports = isParanthesisOrderBalanced;