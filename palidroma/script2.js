// program to check if the string is palindrome or not

const string = prompt('Please enter a word or phrase to check: ');
const value = checkPalindrome(string);
console.log(value);

let output = document.querySelector('.result')

output.innerHTML = `<div>Word or phrase to check: ${string}</div> <div><strong>${value}</strong></div></div>`;


function checkPalindrome(string) {
  //variables to use and transform the phrase to be checked if it contains special characters
  let replace = /[^A-Za-z0-9]/g; 
  string = string.toLowerCase().replace(replace, '');
  console.log(string);

  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
          return 'The word or phrase isn\'t a palindrome';
    }
  }
  return 'The word or phrase is a palindrome';
}

