export class Temperature {
	measure: number;
	scale: string;

	constructor(measure: any, scale: any) {
		this.measure = measure;
		this.scale = scale;
	}

	Add(temperature: Temperature): Temperature {
		let result: Temperature = new Temperature(0, "Celsius")
		return result;;

		// check if scales are same

		if (this.scale === temperature.scale) {
			result = new Temperature(
				this.measure +
					temperature.measure,
				this.scale
			);

			return result;
		} else {
			// scales aren't the same
			// switch (temperature.scale) {
			// 	case "Fahrenheit":
			// 		// if scale is fahrenheit
			// 		temperature;
			// 		break;
			// 	case "Celsius":
			// 		// if scale is celsius
			// 		result =
			// 			(this.measure - 32) *
			// 			(5 / 9);
			// 		break;
			// 	case "Kelvin":
			// 		result =
			// 			(this.measure - 32) *
			// 				(5 / 9) +
			// 			273.15;
			// 		// if scale is kelvin
			// 		break;
			// }
		}
	}

	Substract(
		temperature: Temperature
	): Temperature {
		let result: Temperature = new Temperature(
			0,
			"Celsius"
		);
		return result;
	}

	Multiply(
		temperature: Temperature
	): Temperature {
		let result: Temperature = new Temperature(
			0,
			"Celsius"
		);
		return result;
	}

	Divide(
		temperature: Temperature
	): Temperature {
		let result: Temperature = new Temperature(
			0,
			"Celsius"
		);
		return result;
	}

	Scale(): String {
		let output: String = "";

		switch (this.scale) {
			case "Fahrenheit":
				// if scale is fahrenheit
				output = `${this.scale}`;
				break;
			case "Celsius":
				// if scale is celsius
				output = `${this.measure}`;
				break;
			case "Kelvin":
				// if scale is kelvin
				output = `${this.measure}`;
				break;
		}

		return output;
	}

	ToFahrenheit(): Number {
		let result: Number = 0;

		switch (this.scale) {
			case "Fahrenheit":
				// if scale is fahrenheit
				result = this.measure;
				break;
			case "Celsius":
				// if scale is celsius
				result =
					(this.measure - 32) * (5 / 9);
				break;
			case "Kelvin":
				result =
					(this.measure - 32) *
						(5 / 9) +
					273.15;
				// if scale is kelvin
				break;
		}

		return result;
	}

	ToCelsius(): Number {
		let result: Number = 0;

		switch (this.scale) {
			case "Fahrenheit":
				// if scale is fahrenheit
				result =
					this.measure * (9 / 5) + 32;
				break;
			case "Celsius":
				// if scale is celsius
				result = this.measure;
				break;
			case "Kelvin":
				// if scale is kelvin
				result = this.measure + 273.15;
				break;
		}

		return result;
	}

	ToKelvin(): Number {
		let result: Number = 0;

		switch (this.scale) {
			case "Fahrenheit":
				// if scale is fahrenheit
				result =
					(this.measure - 273.15) *
						(9 / 5) +
					32;
				break;
			case "Celsius":
				// if scale is celsius
				result = this.measure - 273.15;
				break;
			case "Kelvin":
				// if scale is kelvin
				result = this.measure;
				break;
		}

		return result;
	}

	ToString(): String {
		let output: String = "";

		switch (this.scale) {
			case "Fahrenheit":
				// if scale is fahrenheit
				output = `${this.measure}F`;
				break;
			case "Celsius":
				// if scale is celsius
				output = `${this.measure}C`;
				break;
			case "Kelvin":
				// if scale is kelvin
				output = `${this.measure}K`;
				break;
		}

		return output;
	}
}

module.exports = { Temperature };
