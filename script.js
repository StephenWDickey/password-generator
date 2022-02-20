// Password Generator!

// i am using let instead of var because let cannot be redeclared

// this refers to the html element with the id 'generate' which is the button
let generateBtn = document.querySelector("#generate");
////////////////////////////////////////////////////////

// i will write the generatePassword function here so we can refer to it in writePassword
function generatePassword() {
 
    // define lowercase
    let lowercase = "abcdefghijklmnopqrstuvwxyz";

    // define uppercase
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // define numbers
    let numeric = "0123456789";

    // define special characters
    // special characters obtained from: https://owasp.org/www-community/password-special-characters
    let special = " !#$%&'()*+,-./:;<=>?@[}^_`{}|~"

    // prompt for password length
    let passwordLength = prompt("Password may contain 8 to 128 characters. How many characters?");
    // passwordLength is entered as string, we want a value so...
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
    let randomPassword = "";
    let password ="";

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
        for (let i = 0; i < passwordLength; i++) {   
            /* Math.floor will round down to an integer since Math.random generates
            a number between 0 and 1 */
            /* we want our password to be the length we specified at passwordLength
            so the calculations below will add a special character to our password
            without changing our desired length */
            let specialCharacter = randomPassword[Math.floor(Math.random()*randomPassword.length)];
            password = password + specialCharacter;
        }
    }
    // if the length doesnt meet requirement
    else {
        window.alert("Password must be between 8 and 128 characters.");
    }

    // edge case - what if user inputs nothing?
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
// I will write the generate Password function above this one so it can be referenced
function writePassword() {
  let password = generatePassword();
  // the element with id 'password' is the box where the password shows up
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}


///////////////////////////////////////////////////////////
// Add event listener to generate button
// this is will run the writePassword function when clicked
generateBtn.addEventListener("click", writePassword);