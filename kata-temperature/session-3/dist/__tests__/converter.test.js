"use strict";
Object.defineProperty(exports, "__esModule", {
	value: true,
});
const index_1 = require("../index");
const celsiusTemperatureA =
	new index_1.Temperature(10, "Celsius");
const celsiusTemperatureB =
	new index_1.Temperature(34.4, "Celsius");
const celsiusTemperatureC =
	new index_1.Temperature(67.5, "Celsius");
const fahrenheitTemperatureA =
	new index_1.Temperature(63, "Fahrenheit");
const fahrenheitTemperatureB =
	new index_1.Temperature(79.32, "Fahrenheit");
const fahrenheitTemperatureC =
	new index_1.Temperature(0, "Fahrenheit");
const kelvinTemperatureA =
	new index_1.Temperature(10.466, "Kelvin");
const kelvinTemperatureB =
	new index_1.Temperature(2.00859, "Kelvin");
describe("The program should", () => {
	describe("add one temperature to another", () => {
		test("same scale temperatures", () => {
			expect(
				celsiusTemperatureA.Add(
					celsiusTemperatureC
				)
			).toBe(77.5);
			expect(
				celsiusTemperatureB.Add(
					celsiusTemperatureC
				)
			).toBe(101.9);
			expect(
				celsiusTemperatureB.Add(
					celsiusTemperatureC
				)
			).not.toBe(101);
			expect(
				celsiusTemperatureA.Add(
					celsiusTemperatureA
				)
			).toBe(
				celsiusTemperatureA.measure * 2
			);
		});
		test("different scale temperatures", () => {
			expect(
				celsiusTemperatureA.Add(
					kelvinTemperatureB
				)
			).toBeCloseTo(-261.14);
			expect(
				celsiusTemperatureA.Add(
					kelvinTemperatureA
				)
			).toBeCloseTo(-252.684);
			expect(
				fahrenheitTemperatureA.Add(
					kelvinTemperatureA
				)
			).toBeCloseTo(-377.83);
		});
	});
	describe("substract one temperature to another", () => {
		test("same scale temperatures", () => {
			expect(
				celsiusTemperatureA.Substract(
					celsiusTemperatureC
				)
			).toBeCloseTo(-57.5);
			expect(
				celsiusTemperatureB.Substract(
					celsiusTemperatureC
				)
			).toBe(-33.1);
			expect(
				celsiusTemperatureB.Substract(
					celsiusTemperatureC
				)
			).not.toBe(-33);
			expect(
				celsiusTemperatureA.Substract(
					celsiusTemperatureA
				)
			).toBe(0);
			expect(
				fahrenheitTemperatureA.Substract(
					fahrenheitTemperatureA
				)
			).toBe(0);
			expect(
				kelvinTemperatureA.Substract(
					kelvinTemperatureA
				)
			).toBe(0);
		});
		test("different scale temperatures", () => {
			expect(
				celsiusTemperatureA.Substract(
					kelvinTemperatureB
				)
			).toBeCloseTo(281.14);
			expect(
				celsiusTemperatureA.Substract(
					kelvinTemperatureA
				)
			).toBeCloseTo(272.684);
			expect(
				fahrenheitTemperatureC.Substract(
					kelvinTemperatureB
				)
			).toBeCloseTo(456.05);
		});
	});
	describe("multiply one temperature to another", () => {
		test("same scale temperatures", () => {
			expect(
				fahrenheitTemperatureB.Multiply(
					fahrenheitTemperatureB
				)
			).toBeCloseTo(6291.66);
			expect(
				fahrenheitTemperatureC.Multiply(
					fahrenheitTemperatureC
				)
			).toBe(0);
		});
		test("different scale temperatures", () => {
			expect(
				kelvinTemperatureB.Multiply(
					celsiusTemperatureC
				)
			).toBeCloseTo(684.23);
		});
	});
	describe("divide one temperature to another", () => {
		test("same scale temperatures", () => {
			expect(
				fahrenheitTemperatureB.Divide(
					fahrenheitTemperatureA
				)
			).toBeCloseTo(1.26);

			expect(
				celsiusTemperatureC.Divide(
					celsiusTemperatureB
				)
			).toBeCloseTo(1.96);
		});

		test("different scale temperatures", () => {
			expect(
				fahrenheitTemperatureB.Divide(
					celsiusTemperatureA
				)
			).toBeCloseTo(1.59);
			expect(
				celsiusTemperatureC.Divide(
					kelvinTemperatureA
				)
			).toBeCloseTo(-0.26);
		});

		test("throw error at zero division on same scale", () => {
			expect(() => {
				fahrenheitTemperatureA.Divide(
					fahrenheitTemperatureC
				);
			}).toThrowError(
				"Zero division is not permitted"
			);
		});
	});
});
