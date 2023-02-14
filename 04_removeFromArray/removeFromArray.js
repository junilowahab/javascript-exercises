const removeFromArray = function(givenArray, givenValue) {
    //get the index of the value in the givenArray
    let selectedElementIndex = givenArray.indexOf(givenValue);

    //delete/remove the index of the givenValue from the givenArray
    givenArray.splice(selectedElementIndex, 1);

    //return new array
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
