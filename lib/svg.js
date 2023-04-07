// The SVG class is a custom class definition that represents
//  a scalable vector graphic (SVG) object
// The constructor accepts two optional parameters, width and height, which default to 300 and 200 respectively
class SVG {
  constructor(width = 300, height = 200) {
    this.width = width;
    this.height = height;
    this.text = null;
    this.shape = null;
  }


  //This setText method is a custom method inside a class 
  //This method is responsible for setting text content and its color, subject to certain conditions
  //It accepts two parameters - content and color.
  // content represents the text that you want to set, while color represents the color of the text.
  
  
  setText(content, color) {
    if (content.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }

//this code sets the text property of a class instance 
//to an object containing the content, color, and render 
//properties. The content and color properties store the 
//text content and color, while the render function 
//generates the SVG markup for rendering the text with the specified content and color.

    this.text = {
      content: content,
      color: color,
      render: function () {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.content}</text>`;
      },
    };
  }

// the setShape method sets the shape property of a 
//class instance to the value provided by the shape 
//parameter. This allows the user to store a shape 
//object or value in the class instance, which can be 
//used later for rendering or manipulation.

  setShape(shape) {
    this.shape = shape;
  }

  render() {
    let elements = '';

    if (this.shape) {
      elements += this.shape.render();
    }

    if (this.text) {
      elements += this.text.render();
    }

    return `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">${elements}</svg>`;
  }
}

module.exports = SVG;