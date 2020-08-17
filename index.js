const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

function askQuestions() {
    return inquirer.prompt( [
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
          },
          {
            type: "input",
            message: "What is your email?",
            name: "email"
          },
          {
            type: "input",
            message: "What is the GitHub URL of your application?",
            name: "url"
          },
          {
            type: "input",
            message: "What is the title of your application?",
            name: "title"
          },
          {
            type: "input",
            message: "Include a description of your application.",
            name: "description"
          },
          {
            type: "input",
            message: "What packages need to be installed to run your application?",
            name: "installation"
          },
          {
            type: "input",
            message: "What technologies are used in this application?",
            name: "technology"
          },
          {
            type: "input",
            message: "Include an example of how your application is used.",
            name: "usage"
          },
          {
            type: "list",
            name: "license",
            message: "What kind of license would you like to have?",
            name: "license",
            choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"]
          },
          {
            type: "input",
            message: "Include all project contributors, if applicable.",
            name: "contributer"
          },
          {
            type: "input",
            message: "What command is used to run a test?",
            name: "tests",
        }
    ]);
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) {
          throw err;
        }
        console.log("README generated successfully.");
      });
};

async function init() {
    try {
        const answers = await askQuestions();
        generateMarkdown(answers);
        writeToFile("README.md", generateMarkdown(answers));
    
        } catch (err) {
          console.log(err);
        }
};

init();
