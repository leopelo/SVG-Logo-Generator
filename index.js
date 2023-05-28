// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const {Triangle, Circle, Square} = require('./shapes')
const { writeFile } = require("fs").promises;




inquirer
.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters.',
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Enter a color keyword or a hexadecimal number for the text color.',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose the shape of the icon.',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'Enter a color keyword or a hexadecimal number for the shape color.',
    }
  

])
.then(({text}) => {
    this.newTextElement.push({text});



})




.then((answers) => writeFile('logo.svg', {Triangle, Circle, Square}(answers)))
.then(() => console.log('Generated logo.svg'))
.catch((err) => {
    console.log(err);
    console.log('Oops. Something went wrong.');
});

