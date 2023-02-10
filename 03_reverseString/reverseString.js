const reverseString = function(string) {
    let stringArray = string.split('');
    let splitStringArray = stringArray.reverse();
    let joinedSplitArray = splitStringArray.join('');
    return joinedSplitArray;
};

// Do not edit below this line
module.exports = reverseString;
