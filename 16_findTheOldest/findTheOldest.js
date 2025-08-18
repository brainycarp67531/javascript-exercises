const findTheOldest = function(people) {

    // store the current year in a variable named currentYear. 
    const currentYear = new Date().getFullYear();

    // use the reduce method to calculate the age of the person. 
    let oldest = people.reduce((previousPerson, currentPerson) => {
        // test to see if yearOfDeath is missing and if so use current year to calculate the age
        // need to test both for previous and for current.
        // if yearOfDeath is missing in the previousPerson then use the current year 
        if (!("yearOfDeath" in previousPerson)) {
            return (currentYear - previousPerson.yearOfBirth) >= (currentPerson.yearOfDeath - currentPerson.yearOfBirth) ? previousPerson : currentPerson;
        // if yearOfDeath is missing in the currentPerson then use the current year. 
        } else if (!("yearOfDeath" in currentPerson)) {
            return (previousPerson.yearOfDeath - previousPerson.yearOfBirth) >= (currentYear - currentPerson.yearOfBirth) ? previousPerson : currentPerson;
        } else {
            // if yearOdDeath is missing in the currentPerson then use the current year
            return (previousPerson.yearOfDeath - previousPerson.yearOfBirth) >= (currentPerson.yearOfDeath - currentPerson.yearOfBirth) ? previousPerson : currentPerson;
        };

    });

    // return the oldest person in the array. 
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
