/**
 * Created by tobias on 11.08.17.
 *
 * get the largest palindrome product from the product of two 3-digit numbers
 *
 */

var isPalindrome = function (str: number|string):boolean {
    var input:string = str.toString();
    var rev :string = input.split('').reverse().join('');

    document.write("Last Factor: " + (rev === input) + "<br />");

    return rev === input;

};

isPalindrome(7999);