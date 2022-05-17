export const converter = (
	decimal: any
): String | undefined => {
	let output: String;

	// 1. Validation

	if (
		decimal === "" ||
		decimal === null ||
		decimal === undefined
	)
		return undefined;
	else if (decimal < 0) {
		throw new Error(
			`Negative values don't exist`
		);
	} else if (decimal === 0) {
		throw new Error(`Zero value don't exist`);
	} else if (decimal > 3999) {
		throw new Error(
			`Numbers greater than 3999 aren't allowed`
		);
	} else if (typeof decimal === "object") {
		throw new Error(
			`Objects aren't a valid input`
		);
	} else if (typeof decimal === "string") {
		throw new Error(
			`String isn't a valid input`
		);
	}

	// 2. If input is between 1 to 3999

	// If is a number

	if (
		typeof decimal === "number" &&
		decimal >= 1 &&
		decimal < 4000
	) {
		/*
            If
                1. Input is a number
                2. Input is between 1 and 3999
        */

		decimal = Math.trunc(decimal); // Take integer part
		output = "";

		// 4. Process input to return Roman number

		let roman: object;

		roman = {
			M: 1000,
			CM: 900,
			D: 500,
			CD: 400,
			C: 100,
			XC: 90,
			L: 50,
			XL: 40,
			X: 10,
			IX: 9,
			V: 5,
			IV: 4,
			I: 1,
		};

		while (decimal !== 0) {
			// Repeat until decimal = 0

			for (const [
				key,
				value,
			] of Object.entries(roman)) {
				const n = Math.floor(
					decimal / value
				); // How many n times can I divide argument in the roman letter value

				output += key.repeat(n);
				decimal %= value; // Keep the rest of the division

				// Repeat the same process for each letter
			}
		}

		return output;
	}
};
