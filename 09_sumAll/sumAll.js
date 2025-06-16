const sumAll = function(min, max) {

    // create a variable named sum to hold to sum of all the values with the initial value of zero
    let sum = 0;

    // making sure that min is smaller then max
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }

    // returns an error if min is negative
    if (min < 0 || 
        min % 1 !== 0 || 
        max % 1 !== 0 || 
        typeof min !== "number" ||
        typeof max !== "number"
    ) {
        return "ERROR";
    }


    // create a loop that start on the min value and loop until it hits the max value. 
    for (let i = min; i <= max; i++)

        // for each iteration add the current number to the total. 
        sum = sum + i;

    // return the total value. 
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
