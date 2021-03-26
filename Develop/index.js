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
            name: 'title',
            message: 'Please enter your project title',
        },
        {
            type: 'input',
            name: 'projectlink',
            message: 'enter your project link',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter your project description',
        },
        {
            type: 'list-input',
            name: 'tableOfContents',
            message: 'Please enter README section titles',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How does a user install this project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe project usage',
        },
        {
            type: 'input',
            name: 'photos',
            message: 'put a photo link here. Otherwise leave blank',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license does this project have?',
            choices: ["none", "MIT", "Apache", "GPL3.0"],
        },
        {
            type: 'input',
            name: 'contributers',
            message: 'who contributed to the project?',
        },
        {
            type: 'input',
            name: 'technologies',
            message: 'What technologies were used in this project?',
        },
        {
            type: 'list-input',
            name: 'tests',
            message: 'What are the test requirements for this project?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'enter your GitHub username',
        },
        {
            type: 'input',
            name: 'contact',
            message: 'enter your email',
        },
    ]);
    return questions;
};

const generateMarkdown = (data) =>
`
## Project Title

# ${data.title}

## Project Description
${data.description}

## Project Link
${data.projectlink}

## Table Of Contents (TOC)

${data.tableOfContents}

## Installation

${data.installation}

## Usage

${data.usage}

${data.photos}

## License

${data.license}
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

## Contibuting
${data.contributers}

## Tech Used
${data.technologies}

## Tests
${data.tests}

## Questions
${data.questions}
${data.contact}

`;

// TODO: Create a function to initialize app
const init = () => {
    promptDeveloper()
        .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();







