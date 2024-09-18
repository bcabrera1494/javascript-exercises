const convertToCelsius = function(temperature) {
  let convert = ((temperature - 32)*(5/9));
  convert;
  let roundToNearestTenth = Math.round(convert*10)/10
  return roundToNearestTenth;
};

const convertToFahrenheit = function(temperature) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
