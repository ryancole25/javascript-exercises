const palindromes = function (words) {
    const alphanumeric = /^[\p{L}\p{N}]*$/u;
    let forward = '';
    for (let i = 0; i < words.length; i ++){
        if (words[i].match(alphanumeric)){
            forward += words[i].toLowerCase();
        }
    }

    let reverse = '';
    for (let j = forward.length - 1; j >= 0; j += -1){
        reverse += forward[j];
    }

    if (reverse == forward){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

