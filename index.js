//Adding packages annd template
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/template.js");

//Adding the lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Adding prompts
const questions = async () => {
    const answers = await inquirer
      .prompt([
        {
          type: "input",
          message: "What is your name?",
          name: "name",
        },])

