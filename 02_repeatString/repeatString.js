const repeatString = function(string, num) {
    if(num > 0){
        let a = string;
        for(let i = 1; i < num; i++){
           string = a + string; 
        };
    }else if(num < 0 ){
        string = 'ERROR';
    }else{
        string = '';
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
