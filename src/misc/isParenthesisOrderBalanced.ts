/**
 * Check if the order of parenthesises is balanced.
 * @param {string} str: should contain only parenthesis () characters.
 */
export default function isParenthesisOrderBalanced(str: string): boolean {
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
