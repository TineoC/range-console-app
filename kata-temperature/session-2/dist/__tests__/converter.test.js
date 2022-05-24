"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe("The program should", () => {
    const temperatureA = new index_1.Temperature(90.2, "Celsius");
    const temperatureB = new index_1.Temperature(53, "Fahrenheit");
    const temperatureC = new index_1.Temperature(10, "Kelvin");
    const temperatureD = new index_1.Temperature(0, "Fahrenheit");
    describe("convert from fahrenheit", () => {
        test("to celsius", () => {
            expect(temperatureB.ToCelsius()).toBeCloseTo(11.67);
            expect(temperatureD.ToCelsius()).toBeCloseTo(-17.78);
        });
        test("to fahrenheit", () => {
            expect(temperatureD.ToFahrenheit()).toBe(temperatureD.measure);
        });
        test("to kelvin", () => {
            expect(temperatureB.ToKelvin()).toBeCloseTo(284.82);
            expect(temperatureD.ToKelvin()).toBeCloseTo(255.37);
        });
    });
    describe("convert from celsius", () => {
        test("to celsius", () => {
            expect(temperatureA.ToCelsius()).toBe(temperatureA.measure);
            expect(temperatureA.ToCelsius()).not.toBe(91);
        });
        test("to fahrenheit", () => {
            expect(temperatureA.ToFahrenheit()).toBeCloseTo(194.36);
        });
        test("to kelvin", () => {
            expect(temperatureA.ToKelvin()).toBeCloseTo(363.35);
        });
    });
    describe("convert from kelvin", () => {
        test("to celsius", () => {
            expect(temperatureC.ToCelsius()).toBeCloseTo(-263.15);
        });
        test("to fahrenheit", () => {
            expect(temperatureC.ToFahrenheit()).toBeCloseTo(-441.67);
        });
        test("to kelvin", () => {
            expect(temperatureC.ToKelvin()).toBe(temperatureC.measure);
            expect(temperatureC.ToKelvin()).not.toBe(11);
            expect(temperatureC.ToKelvin()).not.toBe(9);
        });
    });
    describe("parse scale", () => {
        test("in fahrenheit", () => {
            expect(temperatureB.Scale()).toBe("Fahrenheit");
        });
        test("in kelvin", () => {
            expect(temperatureC.Scale()).toBe("Kelvin");
            expect(temperatureD.Scale()).not.toBe("Kelvin");
        });
        test("in celsius", () => {
            expect(temperatureA.Scale()).toBe("Celsius");
        });
    });
    describe("parse measure", () => {
        test("in fahrenheit", () => {
            expect(temperatureB.ToString()).toBe("53F");
            expect(temperatureB.ToString()).not.toBe("53 F");
            expect(temperatureB.ToString()).not.toBe(" 53 F");
            expect(temperatureB.ToString()).not.toBe("F53");
        });
        test("in celsius", () => {
            expect(temperatureA.ToString()).toBe("90.2C");
            expect(temperatureA.ToString()).not.toBe("90.2 C");
            expect(temperatureA.ToString()).not.toBe(" 90.2 C");
            expect(temperatureA.ToString()).not.toBe("C90.2");
        });
        test("in kelvin", () => {
            expect(temperatureC.ToString()).toBe("10K");
            expect(temperatureC.ToString()).not.toBe("10 K");
            expect(temperatureC.ToString()).not.toBe(" 10 K");
            expect(temperatureC.ToString()).not.toBe("K10");
        });
    });
});
