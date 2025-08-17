const getTheTitles = function(books) {

    // use map method to extract the titles and create a new array 
    let bookTitles = books.map(inner => {
        return (inner.title);
    });

    // return the new array
    return bookTitles

};

// Do not edit below this line
module.exports = getTheTitles;
