const sumAll = function(a, b) {
    if(a < 0 || b < 0){
        let error = 'ERROR'
        return error;
    };

    if(typeof a !== 'number' || typeof b !== 'number'){
        let error = 'ERROR'
        return error;
    }

    if(a > b){
        let sum = b;
        for(let i = 1; i <= a; i++){
            if(i > b){
                sum = sum + i;
            };
        };
    return sum;
    };

    if(a < b){
        let sum = a;
        for(let i = 1; i <= b; i++){
            if(i > a){
                sum = sum + i;
            };
        };
    return sum;
    };



};

// Do not edit below this line
module.exports = sumAll;
