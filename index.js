const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");
const SVG = require("./lib/svg");

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
    message: "Enter the text color (hexadecimal or name):",
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
    message: "Enter the shape color (hexadecimal or name):",
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

  const svg = new SVG();
  svg.setShape(shape);
  svg.setText(answers.text, answers.textColor);

  //Creates and saves the SVG logo file(s) to a folder called SVG_generated_logo
  fs.writeFile("./examples/logo.svg", svg.render(), (err) => {
    if (err) {
      console.error("Error writing SVG file:", err);
    } else {
      console.log("Generated logo.svg");
    }
  });
});



