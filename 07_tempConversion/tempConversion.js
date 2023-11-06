function convertToCelsius(fahrenheit) {
  let converted = (fahrenheit - 32)/1.8;
  return parseFloat(converted.toFixed(1))
};

function convertToFahrenheit(celsius) {
  let converted = (celsius * 1.8)+ 32;
  return parseFloat(converted.toFixed(1))
};

// MOST OPTIMAL
// const convertToCelsius = function (fahrenheit) {
//   return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
// };

// const convertToFahrenheit = function (celsius) {
//   return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
// };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
