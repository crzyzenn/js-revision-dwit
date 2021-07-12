// // JS Revision

// // Exercise 1
// // **** Write a JavaScript function that reverse a number.
// // Input: 12345
// // Output: 54321

// function reverse(num) {
//   let str = num.toString();
//   let reversedString = str.split("").reverse().join("");
//   return +reversedString; // Finally convert string back to number
// }

// let reversedNumber = reverse(12345);
// console.log(reversedNumber);

// // Exercise 2:
// // 2. Write a JavaScript function that checks whether a
// // passed string is palindrome or not?

// function checkPalindrome(string) {
//   // Reverse the string
//   let reversedString = string.split("").reverse().join("");
//   // Check if original string and reversed string are the same.
//   return reversedString === string;
// }

// const check = checkPalindrome("level");
// console.log(check); // true | false

// // Exercise 3:
// // 3. Write a JavaScript function that accepts a string as a
// // parameter and converts the first letter of each word of the
// // string in upper case.

// // Input: my name is daniel.
// // Output: My Name Is Daniel.

// // Capitalize 1 word.
// function capWord(word) {
//   const firstLetterCap = word.charAt(0).toUpperCase();
//   const remainingLetters = word.slice(1);
//   return firstLetterCap + remainingLetters;
// }

// function capSentence(sentence) {
//   // First convert the sentence to an array
//   const sentenceArr = sentence.split(" ");
//   // New array to store new words
//   const finalArr = [];

//   // Loop in the sentence array and capitalize each word
//   sentenceArr.forEach((word) => {
//     const capitalizedWord = capWord(word);
//     // Add the capitalized word to the new array.
//     finalArr.push(capitalizedWord);
//   });

//   // return the new array by joining all the words with space.
//   return finalArr.join(" ");
// }

// console.log(capSentence("i live in nepal."));

// // Exercise 4:
// // Write a JavaScript function that accept a list of country
// // names as input and returns the longest country name as output.
// // Input: ["Nepal", "USA", "Bhutan", "Afghanistan"]
// // Output: Afghanistan...

// function getLargestCountry(countries) {
//   // Write your code...
//   // Let's set the first country as the largest.
//   let largest = [countries[0], countries[0].length];
//   countries.forEach((country) => {
//     // Compare the length of each country to 'largest'.
//     // If greater then replace it with the current country.
//     if (country.length > largest[1]) {
//       largest = [country, country.length];
//     }
//   });
//   return largest[0];
// }

// largestCountry = getLargestCountry(["Nepal", "USA", "Bhutan", "Afghanistan"]);
// console.log(largestCountry);

// Day 2:
// Exercise 1:
// 1. Write a JavaScript program that accept two integers
// and displays the larger number.

function largest(a, b) {
  // write your code...
  return a > b ? a : b;
}

const largestNo = largest(100, 50);
// console.log(largestNo); // 6

// Exercise 2:
// Write a JavaScript conditional statement to sort three
// numbers. Display an alert box to show the result.
//	Sample numbers : 0, -1, 4
//	Output : 4, 0, -1

function sortNumbers(a, b) {
  // Return either positive or negative number.
  return a > b ? -1 : 1;
}

const sortedNumbers = [0, -1, 4].sort(sortNumbers);
// console.log(sortedNumbers);

// Exercise 3:
// Write a JavaScript for loop that will iterate from 0 to 15.
// For each iteration, it will check if the current number is
// odd or even, and display a message to the screen.
//	Sample Output :
//	"0 is even"
//	"1 is odd"
//	"2 is even"
//	----------
//	----------

// for (let i = 0; i <= 15; i++) {
//   console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
// }

// Exercise 4:
// let students = [
//   ["David", 80],
//   ["Vinoth", 77],
//   ["Divya", 88],
//   ["Ishitha", 95],
//   ["Thomas", 68],
// ];

// Calculate the sum of all students.
// Method 1:
// let totalScore = 0;
// for (let i = 0; i < students.length; i++) {
//   totalScore += students[i][1];
// }

// console.log(totalScore);

// Method 2:
// let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
// let totalScore = students.reduce((acc, val) => {
//   const [studentName, score] = val;
//   return acc + score;
//   // return acc + val[1];
// }, 0);

// let avgScore = totalScore / students.length;
// console.log(avgScore);

// if (avgScore < 60) {
//   console.log("Grade F");
// } else if (avgScore < 70) {
//   console.log("Grade D");
// } else if (avgScore < 80) {
//   console.log("Grade C");
// } else if (avgScore < 90) {
//   console.log("Grade B");
// } else if (avgScore < 100) {
//   console.log("Grade A");
// }

// Exercise 5:
// let library = [
//   { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
//   { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     libraryID: 3245,
//   },
// ];

// // Sort the array by title...
// // ascending....descending...

// // Sorting fn...
// function sortDesc(a, b) {
//   titleA = a.title.toLowerCase();
//   titleB = b.title.toLowerCase();
//   return titleA > titleB ? -1 : 1;
// }

// function sortAsc(a, b) {
//   titleA = a.title.toLowerCase();
//   titleB = b.title.toLowerCase();
//   return titleA > titleB ? 1 : -1;
// }

// const sortByTitleDesc = library.sort(sortDesc);
// const sortByTitleAsc = library.sort(sortAsc);
// console.log(sortByTitleAsc);

// Exercise 6:
// Write a simple JavaScript program to produce the following
// output.
//	Sample array : myColor = ["Red", "Green", "White", "Black"];
//	Expected Output :
//	"Red,Green,White,Black"
//	"Red,Green,White,Black"
//	"Red+Green+White+Black"
// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(","));
// console.log(myColor.join("."));
// console.log(myColor.join("+"));
// console.log(myColor.join(" | "));

let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    libraryID: 1254,
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    libraryID: 4264,
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
    readingStatus: false,
  },
];

// output:
// Sample Output:
// Already read 'Bill Gates' by The Road Ahead.
// Already read 'Steve Jobs' by Walter Isaacson.
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

// Filter out only read books...

// // forEach
// library.forEach((item) => {
//   if (item.readingStatus) {
//     console.log(`Already read '${item.title}' by ${item.author}.`);
//   } else {
//     console.log(`You still need to read '${item.title}' by ${item.author}.`);
//   }
// });

// // Using destructuring
// library.forEach(({ readingStatus, title, author }) => {
//   if (readingStatus) {
//     console.log(`Already read '${title}' by ${author}.`);
//   } else {
//     console.log(`You still need to read '${title}' by ${author}.`);
//   }
// });

// // Using For loop
// for (let i = 0; i < library.length; i++) {
//   let { author, readingStatus, title } = library[i];
//   if (readingStatus) {
//     console.log(`Already read '${title}' by ${author}.`);
//   } else {
//     console.log(`You still need to read '${title}' by ${author}.`);
//   }
// }

// Filter only read books
console.log(library.filter(({ readingStatus }) => readingStatus));
console.log(
  library.filter(({ readingStatus }) => {
    if (readingStatus === true) {
      return true;
    } else {
      return false;
    }
  })
);
