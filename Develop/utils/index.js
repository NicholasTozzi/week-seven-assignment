//packages required
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
//readME prompt
inquirer
  .prompt([
    {
      type: "input",
      message: "Add a description for your README",
      name: "description",
    },
    {
      type: "input",
      message: "Add any installation instructions",
      name: "installation",
    },
    {
      type: "input",
      message: "Add any usage information",
      name: "usage",
    },
    {
      type: "input",
      message: "Add any contribution guidelines",
      name: "contribution",
    },
    {
      type: "input",
      message: "Add any test constructions",
      name: "instructions",
    },
    {
      type: "list",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
        "Other",
        "None",
      ],
      name: "license",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is the title of your GitHub repository?",
      name: "title",
    },
    {
      type: "input",
      message: "What is your twitter?",
      name: "twitter",
    },
  ])
  .then((answers) => {
    const readmeContent = generateMarkdown({ ...answers });
    fs.writeFile("README.md", readmeContent, (err) => {
      err ? console.log(err) : console.log("Successfully created README");
    });
  });
