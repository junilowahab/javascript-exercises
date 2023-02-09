const repeatString = function(string, num) {
    let a = string;
    for(let i = 1; i < num; i++){
       string = a + string; 
    };
    return string;
};

repeatString('hey', 10);

// Do not edit below this line
module.exports = repeatString;
