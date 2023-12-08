/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let updatedStr = str.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  return updatedStr == updatedStr.split("").reverse().join("");
}

module.exports = isPalindrome;
