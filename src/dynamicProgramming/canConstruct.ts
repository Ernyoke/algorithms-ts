/**
 * Given a word and a list of parts. Check if the word can be constructed using the parts from the list.
 *
 * @param word
 * @param parts
 */
export default function canConstruct(word: string, parts: string[]): boolean {

    const canConstructRecursive = (word: string, parts: string[], memo: Map<string, boolean>): boolean => {
        if (memo.has(word)) {
            return <boolean>memo.get(word);
        }
        if (word === '') {
            return true;
        }

        for (let part of parts) {
            if (word.startsWith(part)) {
                const result = canConstructRecursive(word.replace(part, ''), parts, memo);
                memo.set(word, result);
                if (result) {
                    return true;
                }
            }
        }
        return false;
    }
    return canConstructRecursive(word, parts, new Map());
}
