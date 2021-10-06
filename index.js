const inquirer = require("inquirer");
const path = require("path")
const fs = require("fs")
const Manager = require("./lib/Manager");

const team = [];

function init(){
console.log("Build your team!")

function createManager(){
inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?"

    },
    {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID?"
    },
    {
        type: 'input',
        name: "managerEmail",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?"
    }
]).then(userAnswers => {
    const manager = new Manager(userAnswers.managerName, userAnswers.managerId, userAnswers.managerEmail, userAnswers.managerOfficeNumber)
    console.log("MANAGER", manager)
    team.push(manager)
    init();
})
}
createManager();
}

init();