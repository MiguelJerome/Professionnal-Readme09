// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# Project Title
${data.title}

## Description
* ${data.description}

## Installation instructions
* ${data.installation}

## Usage Information
* ${data.usageInfo}

## Contribution Guidelines
* ${data.guidelines}

## Test Instructions
* ${data.instructions}

## License
* ${data.license}

## Questions
* [${data.gitHubUsername}](https://github.com/${data.gitHubUsername}/)
* My email address is : ${data.email}
* How to reach me : ${data.reachMeQuestion}

## Table of Contents
* [Project Title](#Project-Title)
* [Description](#Description)
* [Installation instructions](#Installation-instructions)
* [Usage Information](#Usage-Information)
* [Contribution Guidelines](#Contribution-Guidelines)
* [Test Instructions](#Test-Instructions)
* [License](#License)
* [Questions](#Questions)



`;
};

module.exports = generateMarkdown;
