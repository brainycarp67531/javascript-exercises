const reverseString1 = function(str) {

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


const reverseString2 = function(str) {
    const reversedArray = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversedArray.push(str[i]);
    }
    return reversedArray.join('');
};


const reversedString = function(str) {
    return str  
        .split("")
        .reverse()
        .join("");
};


const reverseString3 = str => str.split('').reverse().join('');


// Do not edit below this line
module.exports = reverseString;
