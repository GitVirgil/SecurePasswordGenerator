// Special Character Code
const specialCharacters = "!@#$%^&*()";
const generateBtn = document.querySelector("generate");
generateButton.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Prompt  response code upon click
function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want your password to be. Must be between 8 and 128");

    var numbers = confirm("Do you want numbers in your password?");

    var lowerCases = confirm("Do you want lowercases in your password?");

    var upperCases = confirm("Do you want uppercases in your password?");

    var Special = confirm("Do you want special characters in your password?");

// Minimum character count
    var minimumCount = 0;

    var minimumNumbers = "";
    var minimumLowerCases = "";
    var minimumUpperCases = "";
    var minimumSpecialCharacters = "";

// Generate Code

  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

  };

  // if select check

    if (numbers === true) {
      minimumNumbers = functionArray.getNumbers();
    }

    if (lowerCases === true) {
      minimumLowerCases = functionArray.getLowerCases();
      minimumCount++;
    }

    if (upperCases === true) {
      minimumUpperCases = functionArray.getUpperCases();
      minimumCount++;
    }

    if (Special = true) {
      minimumSpecialCharacters = functionArray.getSpecialCharacters();
      minimumCount++;
    }

    // variable for loop below
    var randomPasswordGenerated = "";

    // random character loop
    for (var i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
      var randomNumberPicked = Math.floor(Math.random() * 4);

      randomPasswordGenerated += randomNumberPicked;

    }
    // character adding to password assurance

    randomPasswordGenerated += minimumNumbers;
    randomPasswordGenerated += minimumLowerCases;
    randomPasswordGenerated += minimumUpperCases;
    randomPasswordGenerated += minimumSpecialCharacters;

    return randomPasswordGenerated;

}