const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");
const SVG = require("./lib/svg");

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

  shape.setColor(answers.shapeColor);

  const svg = new SVG();
  svg.setShape(shape);
  svg.setText(answers.text, answers.textColor);

  fs.writeFile(`./examples/${answers.shape}.svg`, svg.render(), (err) => {
    if (err) {
      console.error("Error writing SVG file:", err);
    } else {
      console.log(`Created ${answers.shape}.svg in the 'examples' folder.`);
    }
  });
});