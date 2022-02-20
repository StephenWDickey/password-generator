// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
////////////////////////////////////////////////////////

// i will write the generatePassword function here
function generatePassword() {

    // i am using const instead of var because const values cannot be reassigned 
    // define lowercase
    const lowercase = "abcdefghijklmnopqrstuvwxyz";

    // define uppercase
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // define numbers
    const numeric = "0123456789";

    // define special characters
    // special characters obtained from: https://owasp.org/www-community/password-special-characters
    const special = " !#$%&'()*+,-./:;<=>?@[}^_`{}|~"

    // i am using let instead of var because let cannot be redeclared
    // prompt for password length
    let passwordLength = prompt("Password may contain 8 to 128 characters. How many characters?");
    // passwordLength is entered as string, we want an integer so...
    passwordLength = parseInt(passwordLength);

    // prompt for lowercase
    let passwordLowercase = confirm("Would you like your password to contain lowercase letters?");
    // prompt for uppercase
    let passwordUppercase = confirm("Would you like your password to contain uppercase letters?");
    // prompt for numbers
    let passwordNumbers = confirm("Would you like your password to contain numbers?");
    // prompt for special characters
    let passwordSpecial = confirm("Would you like your password to contain special characters?");


    // password will add on each group as it is confirmed, so let's define password as ""
    let password = "";
    let randomPassword = "";

    // now we add on each group
    if (passwordLowercase === true) {
        randomPassword = randomPassword + lowercase;
    }

    if (passwordUppercase === true) {
        randomPassword = randomPassword + uppercase;
    }

    if (passwordNumbers === true) {
        randomPassword = randomPassword + numeric;
    }

    if (passwordSpecial === true) {
        randomPassword = randomPassword + special;
    }

    // let's make sure the password length stays between 8 and 128
    if (passwordLength >= 8 && passwordLength <= 128) {
        for (let i = 0; i < userLength; i++) {    
            let specialCharacter = randomPassword[Math.floor(Math.random()*randomPassword.length)];
            password = password + specialCharacter;
        }
    }
    // if the length doesnt meet requirement
    else {
        window.alert("Password must be between 8 and 128 characters.");
    }

    // what is user inputs nothing?
    if (randomPassword === "") {
        window.alert("Password must be between 8 and 128 characters.");
        // reset password
        password = "";
    }



    return password;


}




//////////////////////////////////////////////////////
// Write password to the #password input
// this function will make a password show up
// we need to make the generatePassword function,
// I will write the generate Password function above this one
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


///////////////////////////////////////////////////////////
// Add event listener to generate button
// this is will run the writePassword function when clicked
generateBtn.addEventListener("click", writePassword);