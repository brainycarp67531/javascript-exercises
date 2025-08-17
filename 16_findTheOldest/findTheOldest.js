const findTheOldest = function(people) {

    // use the reduce method to calculate the age of the person. 
    let oldest = people.reduce((previousPerson, currentPerson) => {
        // test to see if yearOfDeath is missing and if so use current year to calculate the age
        // need to test both for previous and for current. 

        return (previousPerson.yearOfDeath - previousPerson.yearOfBirth) >= (currentPerson.yearOfDeath - currentPerson.yearOfBirth) ? previousPerson : currentPerson;
    });

    // return the oldest person in the array. 
    return oldest

};

// Do not edit below this line
module.exports = findTheOldest;
