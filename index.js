// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');
const { title } = require('process');
const generatePage = require('./src/page-template.js');
const generateMarkdown = require('./utils/generateMarkdown');

const { writeFile, copyFile } = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}






// TODO: Create a function to initialize app
function init() {

promptProject("new read me file")
.then(portfolioData => {
    console.log(generateMarkdown(portfolioData));
    writeFile2(generateMarkdown(portfolioData));
    return generateMarkdown(portfolioData);

  });
  
};
    
const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Readme Markdown file
  =================
  `);
  
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
      portfolioData.projects = [];
    }
    
return inquirer
.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter the project title!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter the project description!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is the project installation instruction?',
        validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Please enter the project instalation instruction!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'usageInfo',
        message: 'What is the project usage information?',
        validate: usageInfoInput => {
            if (usageInfoInput) {
              return true;
            } else {
              console.log('Please enter the project usage information!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'guidelines',
        message: 'What is the project contribution guidelines?',
        validate: guidelinesInput => {
            if (guidelinesInput) {
              return true;
            } else {
              console.log('Please enter the project contribution guidelines!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'What is the project test instructions',
        validate: instructionsInput => {
            if (instructionsInput) {
              return true;
            } else {
              console.log('Please enter the project test instruction!');
              return false;
            }
          }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose the license for the application',
        choices: ['email', 'phone', 'telekinesis']
      },
      {
        type: 'input',
        name: 'gitHubUsername',
        message: 'What is the project GitHub username?',
        validate: gitHubUsernameInput => {
            if (gitHubUsernameInput) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the email for this project?',
        validate: email => {
            if (email) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'reachMeQuestion',
        message: 'What are the additional instructions for reaching you?',
        validate: reachMeQuestionInput => {
            if (reachMeQuestionInput) {
              return true;
            } else {
              console.log('Please enter the additional instructions for reaching you!');
              return false;
            }
          }
      }
    ])
    
};

// writing files
const writeFile2 = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('../Develop/dist/readme.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

// Function call to initialize app
init();


          
