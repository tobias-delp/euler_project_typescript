/**
 * Created by tobias on 11.08.17.
 *
 * get the smallest multiple of the numbers from 1 to 20 (least common multiple)
 *
 */

//find all prime numbers from 1 to 20

var findPrimeNumbersFromTwoTo = function (threshold: number): number[] {
    var primeArray: number[] = [];

    for (var i = 2; i <= threshold; i++) {
        if (isPrime(i, primeArray)){
            primeArray.push(i);
        }
    }
    return primeArray;
};

//TODO tdelp find all primefactors for numbers from 2 to 20
var test: Map<string, string> = new Map;


var calculatePrimeFactors = function (threshold: number): number[] {

    var primeArray: number[] = [];
    let primeFactors: number[] = [];

    var i = 2;
    while (i <= threshold) {
        if (isPrime(i, primeArray)) {
            primeArray.push(i);
            if (threshold % i == 0) {
                primeFactors.push(i);
                threshold /= i;
            }
        }
        if (i == 2) {
            i++;
        } else {
            i += 2;
        }
    }
    return primeFactors;
};

//TODO tdelp put into separate class and reuse
var isPrime = function (num: number, primeArray: number[]): boolean {
    return !primeArray.filter(n => n*n < num).map(prime => (num % prime == 0)).reduce((a, b) => a || b, false);
};

document.write("Largest Palindrome: " + findPrimeNumbersFromTwoTo(20) + "<br />");