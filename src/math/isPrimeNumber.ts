function* range(start = 0, end = 100) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

/**
 * Decide if an integer number is prim (is divisible by 1 and itselft only). 
 * @param {number} number - a numeric integer value 
 */
export default function isPrime(number: number): boolean {
    if (number < 2) {
        return false;
    }
    return (() => {
        for (const i of range(2, Math.sqrt(number))) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    })();
}