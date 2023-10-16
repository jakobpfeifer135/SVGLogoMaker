//^ TODO Provide text for a logo- SVG file
const inquirer = require('inquirer');
const logoPrompt = [
    {
        type:`input`,
        name:`logoText`,
        message:`enter the three characters for your logo`,
    },
];

inquirer.prompt(logoPrompt)
.then(answers => {
    const logoText = answers.logoText;
    console.log(`you entered: ${logoText}`);
})
.catch(error => {
    console.log(`an error occurred: `, error);
})
//^ TODO prompt for 3 characters and this will be the 3 characters that are on the logo

//^ TODO prompt for text color accept keyword or hexadecimal

//^ TODO prompt for shape selection use the list property and have circle, square, triangle as user options

//^ TODO prompt for shapes color allow for keywords or hexadecimal value

//^ TODO makes a svg file called logo.svg

//^ TODO generate a command inline that says generated logo.svg

//^ TODO when i open the image in browser it is 300x200 pixels

