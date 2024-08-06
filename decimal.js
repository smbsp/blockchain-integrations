const Decimal = require('decimal.js');

// Function to add two currency values
function addCurrencies(value1, value2) {
  return new Decimal(value1).plus(value2).toNumber();
}

// Function to subtract two currency values
function subtractCurrencies(value1, value2) {
  return new Decimal(value1).minus(value2).toNumber();
}

// Function to multiply a currency value by a factor
function multiplyCurrency(value, factor) {
  return new Decimal(value).times(factor).toNumber();
}

// Function to divide a currency value by a divisor
function divideCurrency(value, divisor) {
  return new Decimal(value).div(divisor).toNumber();
}

// Example usage
let result = addCurrencies(10.25, 5.75); // 16.00
console.log(result);

result = subtractCurrencies(10.25, 5.75); // 4.50
console.log(result);

result = multiplyCurrency(10.25, 2); // 20.50
console.log(result);

result = divideCurrency(10.25, 2); // 5.125
console.log(result);
