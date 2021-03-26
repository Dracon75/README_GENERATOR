// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == none)
  {
    return " ";
  }
  else if(licesnse == MIT) {
    `[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)`
    `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(licesnse == Apache) {
    `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if(licesnse == GPL3) {
    `[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)`
  }
  else{
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == none){
    return " "
  }
  else if(license == MIT){
    `https://opensource.org/licenses/MIT`
  }
  else if(license == Apache)
  {
    `https://opensource.org/licenses/Apache-2.0`
  }
  else if(license == GPL3)
  {
    `https://opensource.org/licenses/GPL-3.0`
  }
  else{
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license)
  {
    return data.license;
  }
  else{
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {`
## Project Title

# ${data.title}

## Project Description
${data.description}

## Project Link
${data.project-link}

## :brain: Table Of Contents (TOC)
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tech](#tech)
6. [Tests](#tests)

${data.tableOfContents}

## Installation

${data.installation}

## Usage

${data.usage}

${data.photos}

## License

${data.license}
[![GitHub license] (https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

## Contributing
${data.contributers}

## Tech
${data.technologies}

## Tests
${data.tests}

## Questions
${data.questions}
${data.contact}

`;
}

module.exports = generateMarkdown;
