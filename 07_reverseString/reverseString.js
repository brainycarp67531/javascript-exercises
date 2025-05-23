const reverseString = function(str) {

    const length = str.length;
    let reversed = "";

    for (let i = length - 1; i = 0; i--) {
        reversed = reversed + str.slice(i - 1, i);
    }

    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
