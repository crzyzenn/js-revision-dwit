// JS Revision

// Exercise 1
// **** Write a JavaScript function that reverse a number.
// Input: 12345
// Output: 54321

function reverse(num) {
  let str = num.toString();
  let reversedString = str.split("").reverse().join("");
  return +reversedString; // Finally convert string back to number
}

let reversedNumber = reverse(12345);
console.log(reversedNumber);

// Exercise 2:
// 2. Write a JavaScript function that checks whether a
// passed string is palindrome or not?

function checkPalindrome(string) {
  // Reverse the string
  let reversedString = string.split("").reverse().join("");
  // Check if original string and reversed string are the same.
  return reversedString === string;
}

const check = checkPalindrome("level");
console.log(check); // true | false

// Exercise 3:
// 3. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.

// Input: my name is daniel.
// Output: My Name Is Daniel.

// Capitalize 1 word.
function capWord(word) {
  const firstLetterCap = word.charAt(0).toUpperCase();
  const remainingLetters = word.slice(1);
  return firstLetterCap + remainingLetters;
}

function capSentence(sentence) {
  // First convert the sentence to an array
  const sentenceArr = sentence.split(" ");
  // New array to store new words
  const finalArr = [];

  // Loop in the sentence array and capitalize each word
  sentenceArr.forEach((word) => {
    const capitalizedWord = capWord(word);
    // Add the capitalized word to the new array.
    finalArr.push(capitalizedWord);
  });

  // return the new array by joining all the words with space.
  return finalArr.join(" ");
}

console.log(capSentence("i live in nepal."));

// Exercise 4:
// Write a JavaScript function that accept a list of country
// names as input and returns the longest country name as output.
// Input: ["Nepal", "USA", "Bhutan", "Afghanistan"]
// Output: Afghanistan...

function getLargestCountry(countries) {
  // Write your code...
  // Let's set the first country as the largest.
  let largest = [countries[0], countries[0].length];
  countries.forEach((country) => {
    // Compare the length of each country to 'largest'.
    // If greater then replace it with the current country.
    if (country.length > largest[1]) {
      largest = [country, country.length];
    }
  });
  return largest[0];
}

largestCountry = getLargestCountry(["Nepal", "USA", "Bhutan", "Afghanistan"]);
console.log(largestCountry);
