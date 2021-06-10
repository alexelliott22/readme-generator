// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 2.0', 'BSD 2.0', 'None']
    },
    {
        type: 'list',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        choices: ['npm install inquire']
    },
    {
        type: 'list',
        name: 'tests',
        message: 'What command should be run to run tests?',
        choices: ['npm test']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    }
];

inquirer
.prompt(questions)
.then(data => console.log(data))

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        
    })
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
