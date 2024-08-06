// Function to add two currency values
function addCurrencies(value1, value2) {
  // Convert to smallest unit (cents)
  const val1InCents = Math.round(value1 * 100);
  const val2InCents = Math.round(value2 * 100);
  const sumInCents = val1InCents + val2InCents;
  // Convert back to dollars
  return sumInCents / 100;
}

// Function to subtract two currency values
function subtractCurrencies(value1, value2) {
  // Convert to smallest unit (cents)
  const val1InCents = Math.round(value1 * 100);
  const val2InCents = Math.round(value2 * 100);
  const differenceInCents = val1InCents - val2InCents;
  // Convert back to dollars
  return differenceInCents / 100;
}

// Function to multiply a currency value by a factor
function multiplyCurrency(value, factor) {
  // Convert to smallest unit (cents)
  const valueInCents = Math.round(value * 100);
  const productInCents = valueInCents * factor;
  // Convert back to dollars
  return productInCents / 100;
}

// Function to divide a currency value by a divisor
function divideCurrency(value, divisor) {
  // Convert to smallest unit (cents)
  const valueInCents = Math.round(value * 100);
  const quotientInCents = valueInCents / divisor;
  // Convert back to dollars
  return quotientInCents / 100;
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
