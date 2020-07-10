/*
Created 7/7/2020 by Caroline Wheeler
Edited 7/8/2020 by Reema Gupta
Edited 7/8/2020 by Duytan Tran: fixed lack of backslashes and + sign in regex
Edited 7/9/2020 by Duytan Tran

Note - Arrow : => , allows for shorter function syntax.
*/

//Changed regular expression so that it could take in negative numbers - Reema Gupta
const regex="(-)?(\\d\\.\\d|\\d)+";

/*
Created 7/7/2020 by Caroline Wheeler
Updated 7/9/2020 by Caroline Wheeler: Resolves issue of subtraction with negatives.
Takes a string(sym) and a function(operation) and
returns an object with two properties (operation & find matches).
The value of both properties is a function.
 */
const CreateSimpleOperation = (sym, op) => ({
    // findMatches takes a string as a param and finds all matches of a regular expression.
    findMatches: (str) =>
        //Create a regular expression which takes the given symbol between two floats/ints.
        Array.from(new Set(str.match(new RegExp( regex+ "\\" + sym + regex, "g")))),
    // operation takes a string as a param, splits at the symbol into an array containing numbers
    evaluate: (match) => {
        const indexOfSymbol = new RegExp(
            `(?<=(${regex}))\\${sym}(?=${regex})`, "g"
        ).exec(match).index;
        return op(
            [match.slice(0, indexOfSymbol), match.slice(indexOfSymbol + 1)].map((n) =>
                Number(n)));
    },
});


/*
Created 7/7/2020 by Caroline Wheeler
Edited 7/9/2020 by Duytan Tran: remainder button
An Array that holds objects creating from calling functions to create.
These are in the correct order of operations.
 */
const operations = [
    //handles parens
    {findMatches: (str) =>
            Array.from(new Set(str.match(new RegExp("\\([^()]+\\)", "g")))),
        evaluate: (match) => evaluateMath(match.replace("(", "").replace(")", "")),
    },
    CreateSimpleOperation("*", ([a, b]) => a * b),
    CreateSimpleOperation("/", ([a, b]) => a / b),
    CreateSimpleOperation("+", ([a, b]) => a + b),
    CreateSimpleOperation("-", ([a, b]) => a - b),
    CreateSimpleOperation("%", ([a, b]) => a % b),
];

/*
Created 7/8/2020 by Caroline Wheeler
Takes a mathString and returns true if it contains no math expression to evaluate.
 */
const noMatches = (str) =>
    operations.every(({ findMatches }) => findMatches(str).length === 0);


/*
Created 7/8/2020 by Caroline Wheeler
Takes a string & an object containing 2 functions.
Returns a string similar to `str` but with all instances of the given
operation having been replaced with their evaluated result.
 */
const evaluateOperation = (str, operation) =>
    operation.findMatches(str).reduce((a, match) => a.replace(match, operation.evaluate(match)), str );

/*
Created 7/7/2020 by Caroline Wheeler
Edited 7/8/2020 by Caroline Wheeler - split up into multiple functions.
Takes a mathString and returns an evaluation.
 */
const evaluateMath = (mathString) => {
    //remove spaces from the string
    const withoutSpaces = mathString.split(" ").join("");

    // if there are no matches for any of the operations then return the input - end recursion
    if (noMatches(withoutSpaces)) {
        return mathString;
    }

    const result = operations.reduce(evaluateOperation, withoutSpaces);
    return evaluateMath(result);

};

// below being used for testing on jsfiddle -Caroline

/*
const test = (actual, expected) => {
    if (actual === expected) {
        console.log("true");
    } else {
        console.warn(`Expected: ${expected}, got ${actual} instead`);
    }
};

const testAgainstEval = (mathString) => {
    test(evaluateMath(mathString), String(eval(mathString)));
};
*/
