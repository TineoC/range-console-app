import { boolean } from "yargs";
import { validSSN } from "./ssn-validator";
const inquirer = require("inquirer");

const questions = [
	{
		type: "input",
		name: "ssn",
		message:
			"Write a valid SSN (Social Security Number):",
	},
];

let input: any;

inquirer
	.prompt(questions)
	.then((answers: any) => {
		input = answers["ssn"];

		try {
			const validInput: Boolean =
				validSSN(input);

			try {
				if (validInput) {
					console.log(
						"Valid SSN was given."
					);
				}
			} catch (error) {
				console.error(error);
			}
		} catch (e) {
			console.error((e as Error).message);
		}
	});
