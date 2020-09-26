function Convertor_deg(){
  this.toCelsius = function(deg) {
    return (deg - 32) * (5/9);
  }

  this.toFahrenheit = function(deg){
    return (deg * 9/5) + 32;
  }
};

const convertor = new Convertor_deg();
convertor.toCelsius(24);
convertor.toFahrenheit(86);

