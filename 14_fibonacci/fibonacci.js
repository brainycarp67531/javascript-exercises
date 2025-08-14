const fibonacci = function(n) {

    // check if it is a negative number and give back the error message "OOPS"
    if (n < 0) {
        return "OOPS";
    };

    // check if it is a string and still a number and then convert it to a number. 
    if (n >= "0" || n <= "9") {
        // convert it to a number
        n = parseInt(n);
    };

    // calculate the n:th fibonacci number
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    };
    
    // return the n:th fibonacci number
    return a;
};

 
// Do not edit below this line
module.exports = fibonacci;
