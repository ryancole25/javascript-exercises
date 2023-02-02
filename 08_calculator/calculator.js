const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce(function(number, total){
    return total + number;
  }, 0);
};

const multiply = function(array) {
  return array.reduce(function(number, total){
    return total * number;
  }, 1);

};

const power = function(a,b) {
  return a ** b;
	
};

const factorial = function(a) {
  if (a == 0){
    return 1;
  }
  let factorial = a;
  for (let i = a - 1 ; i > 0; i -= 1){
    factorial = factorial * i;
  }
  return factorial;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
