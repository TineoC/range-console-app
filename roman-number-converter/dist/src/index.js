"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_1 = require("./converter");
const inquirer = require("inquirer");
const questions = [
    {
        type: "input",
        name: "arabig-number",
        message: "Write the arabig number to convert to roman:",
    },
];
let input;
inquirer
    .prompt(questions)
    .then((answers) => {
    input = answers["arabig-number"];
    try {
        console.log((0, converter_1.converter)(input));
    }
    catch (error) {
        console.error(error);
    }
});
