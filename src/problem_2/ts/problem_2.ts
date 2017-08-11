/**
 * Created by tobias on 11.08.17.
 *
 * get the sum of even fibonacci numbers until including given threshold
 *
 */

var getEventFibonacciNumbers = function (threshold: number): number[] {
    var a = 0;
    var b = 1;

    var evenFibonaccis: number[] = [];

    while (b < threshold) {
        let cache = a;
        a = b;
        b = a + cache;

        if (b % 2 == 0){
            evenFibonaccis.push(b);
        }
    }

    console.log(evenFibonaccis);

    return evenFibonaccis;
};

var sumOfEvenFibonaccis = function (threshold: number): number {
    return getEventFibonacciNumbers(threshold).reduce((a, b) => a + b, 0);
};

document.write("Summe: " + sumOfEvenFibonaccis(4000000) + "<br />");
