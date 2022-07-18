const inquirer = require("inquirer");
const fs = require("fs");

const licenseList = [];

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter Github Username",
    name: "name",
  },
  {
    type: "input",
    message: "Enter Email",
    name: "email",
  },
  {
    type: "input",
    message: "Enter Title",
    name: "title",
  },
  {
    type: "input",
    message: "Enter Description",
    name: "desc",
  },
  {
    type: "input",
    message: "Enter Usage",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter Contribution",
    name: "cont",
  },
  {
    type: "input",
    message: "Enter License",
    name: "license",
  },
  {
    type: "input",
    message: "Enter Test Instructions",
    name: "test",
  },
  {
    type: "input",
    message: "Enter Installation",
    name: "install",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const Export = `
    # ${data.title}

    ## Description
    ${data.desc}

    ## Usage
    ${data.usage}

    ## Contribution
    ${data.cont}

    ## Installation
    ${data.install}

    ## Test
    ${data.test}

    ## License
    ${data.license}

    ## User Info
    *${data.name}
    *${data.email}
    `;
  fs.writeFile(fileName, Export, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("generating README");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("./READMEGen.md", data);
  });
}

// Function call to initialize app
init();
