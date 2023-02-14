const removeFromArray = function(givenArray, givenValue) {
    //get the index of the value in the array
    let selectedElementIndex = givenArray.indexOf(givenValue);

    //delete/remove index from array
    givenArray.splice(selectedElementIndex, 1);

    //return new array
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
