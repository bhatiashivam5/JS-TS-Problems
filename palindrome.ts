// check string is plaindrome using the js methods
function checkPalindromeString(str: string) {
    const reverse = str.split("")?.reverse()?.join("");
    if (str === reverse) {
        console.log("String is Palindrome");
    }
    else {
        console.log("String is not an Palindrome");
    }

}
// check number is plaindrome using the js methods
function checkPalindromeNumber(number: number) {
    const reverse = parseInt(number.toString().split("").reverse().join(""));
    if (number === reverse) {
        console.log("Number is Palindrome");
    }
    else {
        console.log("Number is not an Palindrome");
    }

}
// check string is plaindrome without using the js methods
function checkPalindromeStringWithoutJsFunc(str: string) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    if (str === reverse) {
        console.log("String is Palindrome");
    }
    else {
        console.log("String is not an Palindrome");
    }

}
// check number is plaindrome without using the js methods
function checkPalindromeNumberWithoutJsFunc(num: number) {
    const str = num?.toString();
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    if (parseInt(str) === parseInt(reverse)) {
        console.log("Number is Palindrome");
    }
    else {
        console.log("Number is not an Palindrome");
    }

}

checkPalindromeString("hello");
checkPalindromeNumber(1221);
checkPalindromeStringWithoutJsFunc("ABCDCBA");
checkPalindromeNumberWithoutJsFunc(1234567);