const inquirer = require('inquirer');
const Circle = require(`../lib/circle.js`); // pulls the circle coding
const Triangle = require(`../lib/triangle.js`); // pulls the triangles coding
const Square = require(`../lib/square.js`);  // pulls the square coding
const { writeFile } = require('fs').promises; // use this out of the fs provided code to write it to the page


// the array of questions with their input type and the question we want displayed to the user as well as edge cases to catch user errors
const questions = [
  {
    type: 'input',
    name: 'logoText',
    message: 'Enter the three characters for your logo:',
    validate: function (input) {
      if (input.length === 3) {
        return true;
      } else {
        return 'Please enter 3 characters.';
      }
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the color for the logo text (color keyword or hexadecimal):',
    validate: function (input) {
      if (isValidColorKeyword(input) || isValidHexColor(input)) {
        return true;
      } else {
        return 'Please enter a valid color keyword or hexadecimal value.';
      }
    },
  },
  {
    type: 'list',
    name: 'selectedShape',
    message: 'Select a shape for your logo:',
    choices: ['circle', 'square', 'triangle'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the color for the shape background (color keyword or hexadecimal):',
    validate: function (input) {
      if (isValidColorKeyword(input) || isValidHexColor(input)) {
        return true;
      } else {
        return 'Please enter a valid color keyword or hexadecimal value.';
      }
    },
  }
];
// an array of colors that can be used by the user
function isValidColorKeyword(input) {
  const validColorKeywords = ['red', 'green', 'blue', 'black', 'white', 'gray'];
  return validColorKeywords.includes(input.toLowerCase());
}
// is used for pulling hexadecimal values and checking to see if the users response matches a value provided
function isValidHexColor(input) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input);
}
// checks to see which shape is selected and then applying the matching colors and text to that shape.
inquirer.prompt(questions)
  .then((answers) => {
    if (answers.selectedShape === 'circle') {
      const circles = new Circle(answers.logoText, answers.textColor, answers.shapeColor); 
      return circles.render();
    }
    if (answers.selectedShape === 'triangle') {
      const triangles = new Triangle(answers.logoText, answers.textColor, answers.shapeColor); 
      return triangles.render();
    }
    if (answers.selectedShape === 'square') {
      const squares = new Square(answers.logoText, answers.textColor, answers.shapeColor); 
      return squares.render();
    }
  })
  .then((svgLogo) => {
    return writeFile("../examples/logo.svg", svgLogo);
  })
  .then(() => {
    console.log("generated logo.svg!");// on success paste this in the command prompt
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });







