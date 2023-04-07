# SVG-Logo-Maker

# Description
This application takes a user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a svg` file.

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
# Installation
To install and use the Professional README Generator application, please follow these steps:

1.You can clone this repository to your local machine using Git:

Git clone https://github.com/harold-fv/SVG-Logo-Maker.

Next, run the following on the command line, npm init -y and npm i inquirer@8.2.4.

After you install the package ,from the command line type node index.js to run the program.

# Usage

1. To use the SVG Logo Maker program, navigate to the root directory of your GitHub repository in your terminal and run the following command: node index.js .

![image](https://user-images.githubusercontent.com/120603153/230541421-f4cb7f64-2217-493c-8f4e-e6aeb06e833e.png)

2. The system will ask to Enter up to three characters:

![image](https://user-images.githubusercontent.com/120603153/230541596-981b0336-71eb-42d9-a856-ef68016202c0.png)

3. The system will ask to Enter the text color (Hexadecimal or name).

![image](https://user-images.githubusercontent.com/120603153/230541764-3faf50a2-4418-4996-9dcf-96ff42e97578.png)

4. Next, the system will ask to choose for a shape. And there are three options to select and these are triangle, circle and square.

![image](https://user-images.githubusercontent.com/120603153/230541923-95845dea-b3d9-43a9-b650-926eeee8b3f4.png)

5. Next, the system will ask to enter the shape color (hexadecimal or name). 
![image](https://user-images.githubusercontent.com/120603153/230542100-647a661e-bf65-43f9-b8c6-f8c7fb8adec2.png)

6. Next, the system will generate the svg file according to what shape has been selected. On this example, I selected triangle as a shape so the outputname would be triangle.svg in the folder called "examples".

![image](https://user-images.githubusercontent.com/120603153/230542341-a7377bde-1c92-48c6-9443-e73210714f71.png)

7. The system also has passed all the test using npm test. The npm test is a command that runs the test suite for a Node.js project. It typically runs a test runner like Jest , which executes the tests defined in the project's test files.

![image](https://user-images.githubusercontent.com/120603153/230542536-cfe1b296-db5c-4bf0-a1c2-ca29217d9b74.png)



