const fibonacci = function(fibNumber) {
    if (fibNumber <= 0){
        return "OOPS";
    }
    
    fibArray = [1, 1];
    if (fibNumber <= 2){
        return fibArray[fibNumber - 1];
    }

    for (let i = 2; i < fibNumber; i += 1){
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2]
    }
    return fibArray[fibNumber - 1];
};

// Do not edit below this line
module.exports = fibonacci;
