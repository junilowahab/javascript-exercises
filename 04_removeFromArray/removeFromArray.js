const removeFromArray = function(givenArray, ...givenValues) {
    return givenArray.filter(x => !givenValues.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
