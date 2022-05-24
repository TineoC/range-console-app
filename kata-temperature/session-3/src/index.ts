export class Temperature {
	measure: number;
	scale: string;

	constructor(measure: number, scale: string) {
		this.measure = measure;
		this.scale = scale;
	}

	Add(temperature: Temperature): number {
		let result: number = 0;

		// operation in same scale
		if (this.scale === temperature.scale) {
			result =
				this.measure +
				temperature.measure;
		} else {
			// operation in different scale
			const convertedTemperature: Temperature =
				temperature.ToSameScale(
					this.scale
				);

			return this.Add(convertedTemperature);
		}

		return result;
	}

	Substract(temperature: Temperature): number {
		let result: number = 0;

		// operation in same scale
		if (this.scale === temperature.scale) {
			result =
				this.measure -
				temperature.measure;
		} else {
			// operation in different scale
			const convertedTemperature: Temperature =
				temperature.ToSameScale(
					this.scale
				);

			return this.Substract(
				convertedTemperature
			);
		}

		return result;
	}

	Multiply(temperature: Temperature): number {
		let result: number = 0;

		// operation in same scale
		if (this.scale === temperature.scale) {
			result =
				this.measure *
				temperature.measure;
		} else {
			// operation in different scale
			const convertedTemperature: Temperature =
				temperature.ToSameScale(
					this.scale
				);

			return this.Multiply(
				convertedTemperature
			);
		}

		return result;
	}

	Divide(temperature: Temperature): number {
		let result: number = 0;

		// operation in same scale
		if (this.scale === temperature.scale) {
			if (temperature.measure === 0) {
				throw Error(
					"Zero division is not permitted"
				);
			}

			result =
				this.measure /
				temperature.measure;
		} else {
			// operation in different scale
			const convertedTemperature: Temperature =
				temperature.ToSameScale(
					this.scale
				);

			return this.Divide(
				convertedTemperature
			);
		}

		return result;
	}

	ToCelsius(): number {
		let result: number = 0;

		switch (this.scale) {
			case "Fahrenheit":
				result =
					((this.measure - 32) * 5) / 9;
				break;
			case "Kelvin":
				result = this.measure - 273.15;
				break;
		}

		return result;
	}

	ToFahrenheit(): number {
		let result: number = 0;

		switch (this.scale) {
			case "Celsius":
				result =
					this.measure * (9 / 5) + 32;
				break;
			case "Kelvin":
				result =
					(this.measure - 273.15) *
						(9 / 5) +
					32;
				break;
		}

		return result;
	}

	ToKelvin(): number {
		let result: number = 0;

		switch (this.scale) {
			case "Celsius":
				result = this.measure + 273.15;
				break;
			case "Fahrenheit":
				result =
					(this.measure - 32) *
						(5 / 9) +
					+273.15;
				break;
		}

		return result;
	}

	ToSameScale(
		desiredScale: string
	): Temperature {
		let newTemperature: Temperature;

		switch (desiredScale) {
			case "Celsius":
				newTemperature = new Temperature(
					this.ToCelsius(),
					"Celsius"
				);

				return newTemperature;
			case "Fahrenheit":
				newTemperature = new Temperature(
					this.ToFahrenheit(),
					"Fahrenheit"
				);
				return newTemperature;
			case "Kelvin":
				newTemperature = new Temperature(
					this.ToKelvin(),
					"Kelvin"
				);
				return newTemperature;
		}
		return new Temperature(0, "undefined");
	}
}
