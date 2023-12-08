/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let vowelCount = 0;
  let vowelArray = ["a", "e", "i", "o", "u"];
  str
    .toLowerCase()
    .split("")
    .forEach(function (char) {
      if (vowelArray.includes(char)) {
        vowelCount += 1;
      }
    });
  return vowelCount;
}

module.exports = countVowels;
