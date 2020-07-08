/*
Created 7/7/2020 by Caroline Wheeler


Note - Arrow operator: => , allows for shorter function syntax.
*/

/*
Created 7/7/2020 by Caroline Wheeler
Takes a string(sym) and a function(operation) and
returns an object with two properties (operation & find matches).
The value of both properties is a function.
 */
const createSimpleOperation = (sym, op) => ({
    // findMatches takes a string as a param and finds all matches of a regular expression.
    findMatches: (str) =>
        Array.from(
            new Set(
                //Create a regular expression which takes the given symbol between two floats/ints.
                //match returns null if no matches, so if falsey return empty array.
                str.match(new RegExp("(\\d\\.\\d|\\d)" + "\\" + sym + "(\\d\\.\\d|\\d)", "g")) || [] )),

    // operation takes a string as a param, splits at the symbol into an array containing numbers
    evaluate: (match) => op(match.split(sym).map(parseFloat)),
});

/*
Created 7/7/2020 by Caroline Wheeler
An Array that holds objects from calling createSimpleOperation.
 */
const operations = [
    createSimpleOperation("*", ([a, b]) => a * b),
    createSimpleOperation("/", ([a, b]) => a / b),
    createSimpleOperation("+", ([a, b]) => a + b),
    createSimpleOperation("-", ([a, b]) => a - b),
];

/*
Created 7/7/2020 by Caroline Wheeler
Takes a string (ex. "2 + 4 * 6") and returns an evaluation.
 */
const evaluateMath = (mathString) => {
    //remove spaces from the string
    const withoutSpaces = mathString.split(" ").join("");

    // if there are no matches for any of the operations then return the input - end recursion
    if (operations.every(({ findMatches }) => findMatches(withoutSpaces).length === 0)) {
        return withoutSpaces;
    }

    // reduction
    const result = operations.reduce((accum, operation) => {
        const matches = operation.findMatches(accum);
        const allMatches = matches.reduce((accum, match) => {
            const matchEvaluated = operation.evaluate(match);
            const newResult = accum.replace(match, matchEvaluated);
            return newResult;
        }, accum);
        return allMatches;
    }, withoutSpaces);

    //recursively call evaluateMath with reduced operations until if statement returns false.
    return evaluateMath(result);
};