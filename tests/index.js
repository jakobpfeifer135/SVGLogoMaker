const inquirer = require('inquirer');

const logoPrompt = [
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
];

const logoColorPrompt = [
  {
    type: 'input',
    name: 'logoColor',
    message: 'Enter the color for the logo text (color keyword or hexadecimal):',
    validate: function (input) {
      if (isValidColorKeyword(input) || isValidHexColor(input)) {
        return true;
      } else {
        return 'Please enter a valid color keyword or hexadecimal value.';
      }
    },
  },
];

const shapeSelectionPrompt = [
  {
    type: 'list',
    name: 'selectedShape',
    message: 'Select a shape for your logo:',
    choices: ['circle', 'square', 'triangle'],
  },
];

function isValidColorKeyword(input) {
  const validColorKeywords = ['red', 'green', 'blue', 'black', 'white', 'gray'];
  return validColorKeywords.includes(input.toLowerCase());
}

function isValidHexColor(input) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input);
}

inquirer.prompt(logoPrompt)
  .then(answers => {
    const logoText = answers.logoText;
    console.log(`You entered: ${logoText}`);

    return inquirer.prompt(logoColorPrompt);
  })
  .then(answers => {
    const logoColor = answers.logoColor;
    console.log(`You selected the color: ${logoColor}`);

    return inquirer.prompt(shapeSelectionPrompt);
  })
  .then(answers => {
    const selectedShape = answers.selectedShape;
    console.log(`You selected the shape: ${selectedShape}`);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
//^ TODO prompt for shape selection use the list property and have circle, square, triangle as user options

//^ TODO prompt for shapes color allow for keywords or hexadecimal value

//^ TODO makes a svg file called logo.svg

//^ TODO generate a command inline that says generated logo.svg

//^ TODO when i open the image in browser it is 300x200 pixels

