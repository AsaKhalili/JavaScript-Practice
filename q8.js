function Circle(){
  this.calcArea = function (radius){
    return 4 * Math.PI * (radius * radius);
  }

  this.calcPeremeter = function (radius){
    return 2 * Math.PI * radius;
  }
};

const calcCirc = new Circle();
calcCirc.calcArea(4); // 4 * pi * 16 
calcCirc.calcPeremeter(4); // 2 * pi * 4