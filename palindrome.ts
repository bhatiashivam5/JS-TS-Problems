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
// check string is plaindrome using the js methods
function checkPalindromeStringWithoutJsFunc(str: string) {
    let reverse = "";
    for (let i = str.length - 1; i>= 0; i--) {
        reverse += str[i];
    }
    console.log(str, reverse)
    if (str === reverse) {
        console.log("String is Palindrome");
    }
    else {
        console.log("String is not an Palindrome");
    }

}

checkPalindromeString("hello");
checkPalindromeStringWithoutJsFunc("ABCDCBA");