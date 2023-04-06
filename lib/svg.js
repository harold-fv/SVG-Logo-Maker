
//The 3 properterties need to initialize which are this.test, this.textColor and this.shape
class SVG {
    constructor() {
      this.text = "";
      this.textColor = "";
      this.shape = null;
    }
  
    //checking the  length of the text must not exceed 3 characters
    setText(text, color) {
      if (text.length > 3) {
        throw new Error("Text must not exceed 3 characters.");
      }
      this.text = text;
      this.textColor = color;
    }
  
    //The instance of the SVG class stores the shape information, 
    //which will be used when rendering the final SVG image 
    //with the shape included.
    setShape(shape) {
      this.shape = shape;
    }
  
    //the render method of the SVG class generates the SVG markup 
    // string, which includes the shape (if one is set)
    //  and the text with their respective properties.
    //300x200 pixel image that matches the acceptance criteria

    render() {
      return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          ${this.shape ? this.shape.render() : ""}
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
  }
  

  // makes the SVG class available for other modules 
//   to import and use within the same Node.js application.
  module.exports = SVG;