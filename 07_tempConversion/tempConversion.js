const convertToCelsius = function(farenheit) {
  let celsius = (5/9) * (farenheit - 32);
  if(celsius - Math.floor(celsius) !== 0){
    let roundedCelsius = celsius.toFixed(1);
    return parseFloat(roundedCelsius);
  }else{
    return celsius;
  }
 
};

const convertToFahrenheit = function(celsius) {
  let farenheit = (celsius * (9/5)) + 32;
  if(farenheit - Math.floor(farenheit) !== 0){
    let roundedFarenheit = farenheit.toFixed(1)
    return parseFloat(roundedFarenheit);
  }else{
    return farenheit;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
