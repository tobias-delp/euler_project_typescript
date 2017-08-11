/**
 * Created by tobias on 11.08.17.
 *
 * get the sum of numbers divisible by 3 and 5 below given threshold
 *
 */

var multiplesOfThreeAndFive = function (threshold: number): number[] {
    var arr = Array.apply(null, Array(threshold-1)).map((_, i) => i+1);
    document.write("Array: " + arr + "<br />");
    return arr.filter(n => (n % 3 == 0 || n % 5 == 0));
};

var sumOfMultiplesOfThreeAndFive = function (threshold: number): number {
    return multiplesOfThreeAndFive(threshold).reduce((a, b) => a + b, 0);
};

document.write("Summe: " + sumOfMultiplesOfThreeAndFive(10) + "<br />");
