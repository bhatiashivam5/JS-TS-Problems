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
checkPalindromeString("lol");
