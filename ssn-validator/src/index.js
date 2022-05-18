"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ssn_validator_1 = require("./ssn-validator");
const inquirer = require("inquirer");
const questions = [
    {
        type: "input",
        name: "ssn",
        message: "Write a valid SSN (Social Security Number):",
    },
];
let input;
inquirer
    .prompt(questions)
    .then((answers) => {
    input = answers["ssn"];
    try {
        const validInput = (0, ssn_validator_1.validSSN)(input);
        try {
            if (validInput) {
                console.log("Valid SSN was given.");
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    catch (e) {
        console.error(e.message);
    }
});
