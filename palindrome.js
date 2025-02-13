// check string is plaindrome using the js methods
function checkPalindromeString(str) {
    var _a, _b;
    var reverse = (_b = (_a = str.split("")) === null || _a === void 0 ? void 0 : _a.reverse()) === null || _b === void 0 ? void 0 : _b.join("");
    if (str === reverse) {
        console.log("String is Palindrome");
    }
    else {
        console.log("String is not an Palindrome");
    }
}
// check number is plaindrome using the js methods
function checkPalindromeNumber(number) {
    var reverse = parseInt(number.toString().split("").reverse().join(""));
    if (number === reverse) {
        console.log("Number is Palindrome");
    }
    else {
        console.log("Number is not an Palindrome");
    }
}
// check string is plaindrome without using the js methods
function checkPalindromeStringWithoutJsFunc(str) {
    var reverse = "";
    for (var i = str.length - 1; i >= 0; i--) {
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
function checkPalindromeNumberWithoutJsFunc(num) {
    var str = num === null || num === void 0 ? void 0 : num.toString();
    var reverse = "";
    for (var i = str.length - 1; i >= 0; i--) {
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
