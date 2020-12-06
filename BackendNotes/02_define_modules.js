//Intoduction
//-In the Node.js module system, each file is treated as a separate module.
//-Variables local to the module are private

//To make an object available outside of a module you just need to expose them
//as additional properties to the 'exports' object


//Using Functions
var area2 = function(width){
  return width * width
}

exports.area = function(width){
  return width*width
}

exports.perimeter = width =>4*width;


//Using arrow Functions

module.exports = {
  area : (width) => {return width*width},
  perimeter:(width) => {return 4*width},
  cubed: (width) => {width*width*width}
}

class Square{
  //This defines a constructor for a class
    constructor(width) {
      this.width = width;
    }
    //Notice, defining a method within a call, does not need the function keyword.
    area(){
      return this.width*this.width;
    }
    perimeter(){
      return 4*this.width;
    }
  }
module.exports = Square;
