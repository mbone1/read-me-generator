const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./util/generateMarkdown")

const writeFileAsync = util.promisify(fs.writeFile);

// // array of questions for user


// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

function promptUser() {
    return inquirer.prompt([{
            // array of questions for user
            message: "What is the name of your project?",
            name: "title",
        },
        {
            message: "Please enter a description of the project.",
            name: "description",
        },
        {
            message: "Please enter instructions for installation.",
            name: "installation",
        },
        {
            message: "Please enter a description of the usage of this project.",
            name: "usage",
        },
        {
            type: "checkbox",
            message: "What is the licensing for this project?",
            name: "license",
            choices: ["MIT", "Apache", "GPL"]

        },
        {
            message: "Please describe how someone can contribute to this project.",
            name: "contribution",
        },
        {
            message: "What is your github username?",
            name: "username",
        },
        {
            message: "What is your email address?",
            name: "email",
        },
    ])
}


async function init() {
    try {
        const answers = await promptUser();
        const ReadMe = generateMarkdown(answers);
        await writeFileAsync("readmeStorage/readme.md", ReadMe);
        console.log("Successfully wrote to README.md");
    } catch (err) {
        console.log(err);
    }
}

init();







// .then(function({
//     title,
//     description,
//     installation,
//     usage,
//     license,
//     contribution,
//     username,
//     email,
// }) {
//     console.log(title);
//     console.log(license);
//     fs.writeFile(
//         `${title}readme.md`,
//         `# ${title}
// ## ${description} 
// ![License](https://img.shields.io/badge/License-${license}-blue.svg "License Badge")
// # Table of Contents :

// - [Installation](#installation)
// - [Contributing](#contribution)
// - [Test](#tests)
// - [Questions](#questions)
// ## Installation:
// ${installation} 
// ## Usage:
// ${usage} 
// ## Contributing:
// ${contribution}   
// ## Questions
// ${username} 
// ${email} `,

//         function(err) {
//             if (err) {
//                 return console.log(err);
//             }
//         }
//     );

// console.log("success");