const removeFromArray = function(array, ...args) {

    // Create new empty array called newArray. 
    let newArray = [];

    // use forEach to go through the array 
    array.forEach((item) => {
        // use push the push element to the new array 
        // unless it is included in the function arguments
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });    
    
    
    
    
    // Loop over all the elements in args
    // for (const item of args) {

    //     // for each element check if it in the array and remove it. 
    //     array = array.filter(arrayItem => arrayItem !== item);
    // };

    // return the modified array
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
