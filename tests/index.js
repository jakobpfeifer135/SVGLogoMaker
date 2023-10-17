const inquirer = require('inquirer');
const Circle = require(`../lib/circle.js`); // Correct the require statements
const Triangle = require(`../lib/triangle.js`); // Correct the require statements
const Square = require(`../lib/square.js`); // Correct the require statements
const { writeFile } = require('fs').promises;

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

function isValidColorKeyword(input) {
  const validColorKeywords = ['red', 'green', 'blue', 'black', 'white', 'gray'];
  return validColorKeywords.includes(input.toLowerCase());
}

function isValidHexColor(input) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input);
}

inquirer.prompt(questions)
  .then((answers) => {
    if (answers.selectedShape === 'circle') {
      const circles = new Circle(answers.logoText, answers.textColor, answers.shapeColor); // Use 'Circle' instead of 'circle'
      return circles.render();
    }
    if (answers.selectedShape === 'triangle') {
      const triangles = new Triangle(answers.logoText, answers.textColor, answers.shapeColor); // Use 'Triangle' instead of 'triangle'
      return triangles.render();
    }
    if (answers.selectedShape === 'square') {
      const squares = new Square(answers.logoText, answers.textColor, answers.shapeColor); // Use 'Square' instead of 'square'
      return squares.render();
    }
  })
  .then((svgLogo) => {
    return writeFile("../examples/logo.svg", svgLogo);
  })
  .then(() => {
    console.log("generated logo.svg!");
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });






//   .then(answers => {
//     const logoText = answers.logoText;
//     console.log(`You entered: ${logoText}`);

    
//   })
//   .then(answers => {
//     const logoColor = answers.logoColor;
//     console.log(`You selected the color: ${logoColor}`);

    
//   })
//   .then(answers => {
//     const selectedShape = answers.selectedShape;
//     console.log(`You selected the shape: ${selectedShape}`);
    
//   })
//   .then(answers => {
//     const shapeColor = answers.shapeColor;
//     console.log(`You selected the shape color: ${shapeColor}`);
    
//   })
  










//^ TODO prompt for shape selection use the list property and have circle, square, triangle as user options

//^ TODO prompt for shapes color allow for keywords or hexadecimal value

//^ TODO makes a svg file called logo.svg

//^ TODO generate a command inline that says generated logo.svg

//^ TODO when i open the image in browser it is 300x200 pixels

