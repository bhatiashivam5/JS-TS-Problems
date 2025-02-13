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

checkPalindromeString("lol")