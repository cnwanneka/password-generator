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


// Get references to the #generate element
let generateBtn = document.querySelector('#generate');


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// Write password to the #password input
function writePassword() {
  let rightPrompts = getPrompts();
  let passwordText = document.querySelector('#password');
  
  if (rightPrompts) {
      let userPassword = generatePassword();
      passwordText.value = userPassword;
  }
  else {
    passwordText.value = "";
  }    
}


// Function to generate password with user input and get a random element from an array
function generatePassword() {  
    let password = "";
    for (let i = 0; i < characterLength; i++) {
      const randomIndex = Math.floor(Math.random() * choiceArr.length)
      password = password + choiceArr[randomIndex]; 
    }
    return password;  
}


// Function to prompt user for password options
function getPrompts() {
    choiceArr = [];

    characterLength = parseInt(prompt("How long do you want your password to be? (10 - 64 characters)"));

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
