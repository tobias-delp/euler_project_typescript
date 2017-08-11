/**
 * Created by tobias on 11.08.17.
 *
 * get the largest prime factor of given primenumber
 *
 */

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

var isPrime = function (num: number, primeArray: number[]): boolean {
    return !primeArray.filter(n => n*n < num).map(prime => (num % prime == 0)).reduce((a, b) => a || b, false);
};

var primeFactors: number[] = calculatePrimeFactors(600851475143);
document.write("Last Factor: " + primeFactors.pop() + "<br />");