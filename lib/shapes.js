
//The color property is being initialized to an empty string, 
// which is a default value.
class Shape {
    constructor() {
      this.color = "";
    }
  //This method allows you to set the color of a shape object.
    setColor(color) {
      this.color = color;
    }
  
    render() {}
  }
  //This method returns an SVG string representing a triangle shape.

  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  

  //This method returns an SVG string representing a circle shape.

  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  //This method returns an SVG string representing a square shape.
  class Square extends Shape {
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };