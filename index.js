const inquirer = require('inquirer');
const fs = require('fs')

class Shape {
  constructor(shapeColor) {
      this.color = shapeColor
  }
}
class Circle extends Shape {
  makeShape() {
      return `<circle cx="150" cy="100" r="50" fill='${this.color}'/>`
  }
}
class Triangle extends Shape {
  makeShape() {
      return `<polygon points="150,40 85,150 215,150" fill='${this.color}' class="triangle" />`
  }
}
class Square extends Shape {
  makeShape() {
      return `<rect x="100" y="50" width="100" height="100" fill='${this.color}'/>`
  }
}


{/* <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="50" fill=''/>
  <rect x="100" y="50" width="100" height="100" fill=''/>
  <polygon points="150,40 85,150 215,150" fill='' class="triangle" />
  <text font-size="50" text-anchor="middle" fill='white' x="150" y="120">SAK</text>

</svg> */}






inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter 3 characters for your logo!',
        name: 'char',
      },
    {
        type: 'input',
        message: 'How about a color for said characters?',
        name: 'charColor',
      },
    {
        type: 'list',
        message: 'Choose a shape!',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
      },
    {
        type: 'input',
        message: 'And a color for the shape?.',
        name: 'shapeColor',
      }, 
  ])
  .then((answers) => {
    let shape = ''
    // if (answers.shape === 'Circle') {
    //     shape = `<circle cx="150" cy="100" r="50" fill='${answers.shapeColor}'/>`
    // } else if (answers.shape === 'Square') {
    //     shape = `<rect x="100" y="50" width="100" height="100" fill='${answers.shapeColor}'/>`
    // } else if (answers.shape === 'Triangle') {
    //     shape = `<polygon points="150,40 85,150 215,150" fill='${answers.shapeColor}' class="triangle" />`
    // }
    if (answers.shape === 'Circle') {
        shape = new Circle(answers.shapeColor)
        shape = shape.makeShape()
    } else if (answers.shape === 'Square') {
      shape = new Square(answers.shapeColor)
      shape = shape.makeShape()
    } else if (answers.shape === 'Triangle') {
      shape = new Triangle(answers.shapeColor)
      shape = shape.makeShape()
    }
    let text = `<text font-size="50" text-anchor="middle" fill='${answers.charColor}' x="150" y="120">${answers.char}</text>`
    let content = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    ${text}
    </svg>`




    fs.writeFile('./examples/logo.svg', content, err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });