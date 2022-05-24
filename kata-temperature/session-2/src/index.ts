export class Temperature {
	measure: number;
	scale: string;

	constructor(measure: number, scale: string) {
		this.measure = measure;
		this.scale = scale;
	}

	ToKelvin(): number {
		let result: number = 0;

		let scale = this.scale;

		switch (scale) {
			// if scale is Celsius
			case "Celsius":
				result = this.measure + 273.15;
				break;
			// if scale is Fahrenheit
			case "Fahrenheit":
				result =
					((this.measure - 32) * 5) /
						9 +
					273.15;
				break;
			// if scale is Kelvin
			case "Kelvin":
				result = this.measure;
				break;
		}

		return result;
	}

	ToCelsius(): number {
		let result: number = 0;

		let scale = this.scale;

		switch (scale) {
			// if scale is Celsius
			case "Celsius":
				result = this.measure;
				break;
			// if scale is Fahrenheit
			case "Fahrenheit":
				result =
					((this.measure - 32) * 5) / 9;
				break;
			// if scale is Kelvin
			case "Kelvin":
				result = this.measure - 273.15;
				break;
		}

		return result;
	}

	ToFahrenheit(): number {
		let result: number = 0;

		let scale = this.scale;

		switch (scale) {
			// if scale is Celsius
			case "Celsius":
				result =
					(this.measure * 9) / 5 + 32;
				break;
			// if scale is Fahrenheit
			case "Fahrenheit":
				result = this.measure;
				break;
			// if scale is Kelvin
			case "Kelvin":
				result =
					(this.measure - 273.15) *
						(9 / 5) +
					32;
				break;
		}

		return result;
	}

	Scale(): string {
		return this.scale;
	}

	ToString(): string {
		let parse: string = "";

		let measure: number = this.measure;
		let scale: string = this.scale;

		switch (scale) {
			// if scale is Celsius
			case "Celsius":
				parse = `${measure}C`;
				break;
			// if scale is Fahrenheit
			case "Fahrenheit":
				parse = `${measure}F`;
				break;
			// if scale is Kelvin
			case "Kelvin":
				parse = `${measure}K`;
				break;
		}

		return parse;
	}
}
