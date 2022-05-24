import { Temperature } from "../index";

describe("The converter should", () => {
	let tempA: Temperature,
		tempB: Temperature,
		tempC: Temperature,
		tempD: Temperature,
		tempE: Temperature;

	beforeEach(() => {
		tempA = new Temperature(5, "Celsius");
		tempB = new Temperature(5.5, "Celsius");

		tempD = new Temperature(
			5.5,
			"Fahrenheit"
		);

		tempD = new Temperature(5.5, "Kelvin");

		tempE = new Temperature(0, "Kelvin");
	});

	test("add one temperature to another", () => {
		let result = {
			measure: 10.5,
			scale: "Celsius",
		};

		expect(tempA.Add(tempB)).toBe(result);

		expect(tempA.Add(tempC)).toThrowError(
			"Temperature without scale"
		);

		expect(tempA.Add(tempC)).toThrowError(
			"Temperature without scale"
		);

		expect(
			tempD.Add(tempB).measure
		).toBeCloseTo(283.65);

		expect(tempD.Add(tempB).scale).not.toBe(
			"Celsius"
		);
	});

	test("substract one temperature to another", () => {});

	test("multiply one temperature to another", () => {});

	test("divide a temperature to another", () => {
		// Cannot divide per zero
		expect(tempD.Divide(tempE)).toThrowError(
			"Zero division is not available"
		);

		expect(tempA.Divide(tempB)).toBeCloseTo(
			0.91
		);
	});

	test("Convert celsius to celsius", () => {});

	test("Convert celsius to fahrenheit", () => {});

	test("Convert celsius to kelvin", () => {});

	test("Convert fahrenheit to kelvin", () => {});

	test("Convert fahrenheit to celsius", () => {});

	test("Convert fahrenheit to fahrenheit", () => {});

	test("Convert kelvin to celsius", () => {});

	test("Convert kelvin to fahrenheit", () => {});

	test("Convert kelvin to kelvin", () => {});

	test("Parse scale to string", () => {
		expect(tempA.Scale()).not.toBe({
			measure: 5,
			scale: "Celsius",
		});

		expect(tempA.Scale()).toBe("Celsius");

		expect(tempC.Scale()).toThrowError(
			"Temperature without scale"
		);
	});

	test("Create temperature", () => {
		const newTemp = new Temperature(
			"Christopher",
			"Celsius"
		);

		const measure = newTemp.measure;
		const scale = newTemp.scale;

		expect(measure).toThrowError(
			"Temperature cannot be a string"
		);

		expect(scale).toThrowError(
			"Scale cannot be a number"
		);
	});
});
