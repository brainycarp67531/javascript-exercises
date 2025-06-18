const convertToCelsius = function(tempFahrenheit) {

  // convert the temperature from fahrenheit to celsius
  let tempCelsius = (tempFahrenheit - 32) * 5 / 9;

  // round the value to 1 decimal
  tempCelsius = Math.round(tempCelsius * 10) / 10;

  // return the calculated value.
  return tempCelsius;

};

const convertToFahrenheit = function(tempCelsius) {

  // convert the temperature from celsius to Fahrenheit
  let tempFahrenheit = tempCelsius * 9 / 5 + 32;

  // round the value to 1 decimal
  tempFahrenheit = Math.round(tempFahrenheit * 10) / 10;

  // return the calculated value
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
