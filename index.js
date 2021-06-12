// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const { writeFile } = require('../../projects/portfolio-generator/utils/generate-site');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        validate: userName => {
            if(userName) {
                return true;
            }
            else{
                console.log('Please enter a Username.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: email => {
            if(email) {
                return true;
            }
            else{
                console.log('Please enter an email address.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
        validate: projName => {
            if(projName) {
                return true;
            }
            else{
                console.log('Please enter a project name.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project.',
        validate: description => {
            if(description) {
                return true;
            }
            else{
                console.log('Please enter a description of your project.')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 2.0', 'BSD 2.0', 'None']
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        default: 'npm install inquire'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
        validate: usage => {
            if(usage) {
                return true;
            }
            else{
                console.log('Please enter a the need to know information for the user.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
        validate: contributing => {
            if(contributing) {
                return true;
            }
            else{
                console.log('Please enter the need to know information about contributing to t he project.')
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(markdown) {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./README-generated.md', markdown, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message:'File Created'
            });
        })
    }) 
        
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => generateMarkdown(data))
        .then((markdown) => writeToFile(markdown))
        .catch(err => console.log(err))
}

// Function call to initialize app
init();
