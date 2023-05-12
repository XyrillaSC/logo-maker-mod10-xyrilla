// const inquirer = require('inquirer');
// const fs = require('fs')
// const { Circle, Triangle, Square } = require('./shapes.js');

import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Triangle, Square } from './lib/shapes.js';


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
      console.log('generated logo.svg')
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });