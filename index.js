function reverse(word) {
// const forwardArray = word.split("");
// const reversedWordArray = forwardArray.reverse();
// const reversedWord = reversedWordArray.join("");
// return reversedWord;
return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
const reversedWord = reverse(word);

return word === reversedWord;
}

// went over during solution 2 
// function isPalindrome(word) {
//   for (let i = 0; i < word.length / 2; i++){
//     const j = word.length - 1 - i 

//     if (word[i] !== word[j]) return false;
// }
// return true;
// }


/* 
  Add your pseudocode here
  create isPalindrome function which takes in a string defined by word
  initialize an array with the target word split into each individual letter
  reverse the letters in a new array 
  join the letters together to form one word 
  compare reverse word letter by letter to target word 
  return true if all letters match 
  else return false 

*/

/*
  Add written explanation of your solution here
  first, we need to split up the array into single letters
then, we need to reverse the array and join the letters back together to create reverseArray 
afterward, we need to compare using absolute true
if true, the word is a palidrome 
if false, the word is not a palidrome 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("tacocat"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("wednesday"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("z"));
}

module.exports = isPalindrome;
