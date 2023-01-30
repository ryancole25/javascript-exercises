const sumAll = function(num1, num2) {
    let greater;
    let lesser;
    
    // Make sure the values are integers
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }

    // Check for negative values
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    }
    // Find the greater and the lesser number of the two
    if (num1 - num2 >= 0){
        greater = num1;
        lesser = num2
    }
    else{
        greater = num2;
        lesser = num1;
    }
    
    // Sum up the values from smallest to largest including all integers in between 
    let sum = 0;
    for (let i = lesser; i <= greater; i ++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
