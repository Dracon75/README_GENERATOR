// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// TODO: Create a function to write README file
//function writeToFile(fileName, data) { }
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
//const questions = [];

const promptDeveloper = () => {
    const questions = inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your project title',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter your project description',
        },
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'Please enter README section titles',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Does this project need to be installed? if so, how?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe project usage. Describe how to navigate the project. do you want to include photos?',
        },
        {
            type: 'input',
            name: 'license',
            message: 'What type of license does this project have?',
        },
    ]);
    return questions;
};

const generateMarkdown = (answers) =>
`
# ${answers.name}

## Project Description

${answers.description}


## Table Of Contents (TOC)

${answers.tableOfContents}

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

${answers.license}

`;

// TODO: Create a function to initialize app
//function init() { }
const init = () => {
    promptDeveloper()
        .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();







