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
      }});

