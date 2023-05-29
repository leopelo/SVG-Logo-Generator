// Call inquirer and shapes class file

const inquirer = require("inquirer");
const {Triangle, Circle, Square} = require('./lib/shapes')
const { writeFileSync } = require("fs");
//prompt questions for user
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
  
//create files for each shape class and call SVG function
])
.then(({text, textcolor, shape, shapecolor}) => {
    if (shape === "circle") {
        const circle = new Circle()
        circle.setColor(shapecolor)
        const SVGshape= SVG(circle, text, textcolor)
        writeFile('./examples/circle.svg', SVGshape)
    }
    if (shape === "triangle") {
        const triangle = new Triangle()
        triangle.setColor(shapecolor)
        const SVGshape = SVG(triangle, text, textcolor)
        writeFile('./examples/triangle.svg', SVGshape)
    }
    if (shape === "square") {
        const square = new Square()
        square.setColor(shapecolor)
        const SVGshape = SVG(square, text, textcolor)
        writeFile('./examples/square.svg', SVGshape)
    }
})

function SVG(shape, text, textcolor) {
    return ` <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textcolor}">${text}</text>
    </svg>
    `
}
function writeFile(fileName, data){
writeFileSync(fileName, data)
}

