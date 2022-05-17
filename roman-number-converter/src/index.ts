import { converter } from "./converter";
const inquirer = require("inquirer");

const questions = [
	{
		type: "input",
		name: "arabig-number",
		message:
			"Write the arabig number to convert to roman:",
	},
];

let input: any;

inquirer
	.prompt(questions)
	.then((answers: any) => {
		input = answers["arabig-number"];

		try {
			console.log(converter(input));
		} catch (error) {
			console.error(error);
		}
	});
