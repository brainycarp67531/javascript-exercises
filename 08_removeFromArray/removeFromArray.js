const removeFromArray = function(array, ...args) {

    // Loop over all the elements in args
    for (item in args) {

        // for each element check if it in the array and remove it. 
        array = array.filter(arrayItem => arrayItem !== item);

    }

    // return the modified array
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
