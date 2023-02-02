const findTheOldest = function(array) {
    const oldest = array.sort(function(a, b){
        if (!a.yearOfDeath){
            a.yearOfDeath = 2023;
        }
        if (!b.yearOfDeath){
            b.yearOfDeath = 2023;
        }
        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;
        if (aAge - bAge > 0){
            return -1;
        }
        else{
            return 1;
        }
    });
    return oldest[0];

};

// Do not edit below this line
module.exports = findTheOldest;
