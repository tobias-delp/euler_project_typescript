/**
 * Created by tobias on 11.08.17.
 *
 * get the largest palindrome from the product of two 3-digit numbers
 *
 */

var solveProblem = function (): string {
    var arrA: number[] = Array.apply(null, Array(1000)).map((_, i) => i).reverse();
    var arrB: number[] = Array.apply(null, Array(1000)).map((_, i) => i).reverse();

    var result: number = 0;

    arrA.forEach(nA => {
        arrB.forEach(nB => {
            let cache = nA*nB;
            //only consider results which are bigger than an already found result
            if(cache > result) {
                if(isPalindrome(cache)){
                    console.log(result);
                    result = cache;
                    return;
                }
            } else {
                return;
            }
        });
    });

    return result.toString();
};

var isPalindrome = function (str: number|string): boolean {
    var input: string = str.toString();
    var rev: string = input.split('').reverse().join('');

    return rev === input;
};

document.write("Largest Palindrome: " + solveProblem() + "<br />");