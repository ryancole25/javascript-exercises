const removeFromArray = function(givenArray, ...args) {
    // Make an array with all of the values to remove
    let removeThese = [];
    for (let i = 1; i < arguments.length; i ++){
        removeThese.push(arguments[i]);
    }

    let newArray = [];
    let remove = false;
    // Loop through the givenArray and see if the values should be removed or not
    for (let j = 0; j < givenArray.length; j ++){
        remove = false;
        for (let k = 0; k < removeThese.length; k ++){
            if (removeThese[k] === givenArray[j]){
                remove = true;
            }
        }
        // Add values to new array if they are not removed
        if (remove == false){
            newArray.push(givenArray[j]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
