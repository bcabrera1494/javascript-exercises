const convertToCelsius = function(temperature) {
  let convert = ((temperature - 32)*(5/9));
  convert;
  let roundToNearestTenth = Math.round(convert*10)/10
  return roundToNearestTenth;
};

const convertToFahrenheit = function(temperature) {
  let convertF = ((temperature*(9/5))+32);
  convertF;
  let roundToNearestTenth = Math.round(convertF*10)/10;
  return roundToNearestTenth;
};

console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToCelsius(-100));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
