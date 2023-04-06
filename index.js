const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");


//Create the Questions and save it to variable const
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters:",
    validate: (input) => input.length <= 3 || "Input must be 3 characters or less",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color:",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["triangle", "circle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color:",
  },
];
// Creates inquirer package to prompt the user for input based on the questions array
inquirer.prompt(questions).then((answers) => {
    let shape;
    switch (answers.shape) {
      case "triangle":
        shape = new Triangle();
        break;
      case "circle":
        shape = new Circle();
        break;
      case "square":
        shape = new Square();
        break;
      }
  
      //passing the user's input for the shape color 
      //(stored in answers.shapeColor) to the setColor() method

      shape.setColor(answers.shapeColor);
  
      //defines a template to create the SVG content
      const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
      ${shape.render()}
      <text x="150" y="150" font-size="36" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>
      `;
    
      // creates a new file called logo.svg located on SVG_created_file folder or overwrite the existing file with the specified content.
      fs.writeFile("./SVG_created_file/logo.svg", svgContent, (err) => {
        if (err) {
          console.error("Error writing SVG file:", err);
        } else {
          console.log("SVG file created successfully!");
        }
      });
  
  
  });