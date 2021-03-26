// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license)
  {
  `[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)`
  }
  else{
    return "";
  }
  // MIT Example = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license)
  {

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

## Table Of Contents (TOC)

${data.tableOfContents}

## Installation

${data.installation}

## Usage

${data.usage}

${data.photos}

## License

${data.license}
[![GitHub license] (https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

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
}

module.exports = generateMarkdown;
