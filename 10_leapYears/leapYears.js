const leapYears = function(year) {
 

    // check if year is divisible by 400 which makes it a leap year.
    if (year % 400 === 0) {
        
        // return that is a leap year
        return true;
    }

    // Check it year is divisible by 4 and not 100, which makes it a leap year. 
    else if (year % 4 === 0 && year % 100 !== 0) {
        // return that it is a leap year
        return true;
    }

    // else it is not a leap year. 
    else {
        // return that it is not a leap year. 
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
