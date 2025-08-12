const palindromes = function (str) {

    // make all the letters in the str lower case
    let lowerCaseStr = str.toLowerCase();

    // split the string in to an array
    let strArray = lowerCaseStr.split("");

    // loop over the array and remove any no letter characters
    for (let i = 0; i < strArray.length; i++) {
        // if (strArray[i] < "a" || strArray[i] > "z" ) {
        if (strArray[i] < "0" || strArray[i] > "z" || (strArray[i] > "9" && strArray[i] < "a")) {
            // remove the current character from the array
            strArray.splice(i, 1);

            // decrease i by one to stay in the same place to check the next character
            i--;
        };
    };

    // loop over the array and compare the i:th with the array.length-1-i characters 
    for (let i = 0; i < strArray.length - 1; i++) {
        // start checking if it is an palindrome
        if (strArray[i] === strArray[strArray.length - 1 - i]) {
            // if the two characters are the same continue to the next one. 
            continue;
        } else {
            // return false if two characters is not the same. 
            return false;
        };
    };

    // if all characters are the same return true
    return true;
 
};


// Do not edit below this line
module.exports = palindromes;
