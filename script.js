// Length of characters
let characterLength = 64;

// Possible characters
let choiceArr = [];

// Array of special characters to be included in password
let specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];
  
// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];
  
// Array of uppercase characters to be included in password
let upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
// Function to prompt user for password options
function getPasswordOptions() {
  
}
  
// Function for getting a random element from an array
function getRandom(arr) {
  
}


  
// Function to generate password with user input
function generatePassword() {    
}

function getPrompts(){
    choiceArr = [];
    
    characterLength = parseInt(prompt("How long do you want your password to be? (Between 10 - 64 characters"));

    if(isNaN(characterLength) || characterLength < 10 || characterLength > 64) {

      alert("Character length must be a number, between 10 - 64 digts.");
      return false;
    }

    if (confirm("Would you like lowercased characters in your password?")) {
      choiceArr = choiceArr.concat(lowerCasedCharacters);
    }
    if (confirm("Would you like uppercased characters in your password?")) {
      choiceArr = choiceArr.concat(upperCasedCharacters);
    }
    if (confirm("Would you like special characters in your password?")) {
      choiceArr = choiceArr.concat(specialCharacters);
    }
    if (confirm("Would you like numbers in your password?")) {
      choiceArr = choiceArr.concat(numericCharacters);
    }
    return true;
}

  
// Get references to the #generate element
let generateBtn = document.querySelector('#generate');
  
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  
  passwordText.value = password;
  }
  
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);