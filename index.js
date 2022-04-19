function isPalindrome(word) {
  let checkTrue = '';
  for(let i = word.length -1; i >= 0 ; i--) {
    checkTrue = checkTrue + word[i]
  }
    return checkTrue === word; 
  }
    

  /*
  Alt solution with array as shown by instructor:

  function reverse(word) {
    return word.split("").reverse().join("");
  }
  
  function isPalindrome(word) {
    const reversedWord = reverse(word);

    return word === reversedWord;
  }


  */

/* 
  Add your pseudocode here
  create a new word that is the given word in reverse 
  if the two are the same at the end return true, else return false
*/

/*
  Add written explanation of your solution here
  if given word is a palindrome it should be the same final word after it is reversed
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
