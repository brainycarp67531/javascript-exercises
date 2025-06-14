const reverseString = function(str) {

    // create an array named strArray for holding the string that should be reversed
    let strArray = [];

    // Create an array named reversedArray to hold the reversed array. 
    let reversedArray = [];
    
    // create an new string named reversedString to hold the new string. 
    // let reversedString = '';

    // split the string to a array 
    strArray = str.split('');

    // loop over the array from last to first and store each of the letters in the new array. 
    for (let i = strArray.length - 1; i >= 0; i--) {
        reversedArray[strArray.length - 1 - i] = strArray[i];
    }

    // Join the reversed array and store it in the new string.
    let reverseString = reversedArray.join(''); 

    // return the string. 
    return reverseString;

};

// Do not edit below this line
module.exports = reverseString;
