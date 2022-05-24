"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperature = void 0;
class Temperature {
    constructor(measure, scale) {
        this.measure = measure;
        this.scale = scale;
    }
    Add(temperature) {
        let result = new Temperature(0, "Celsius");
        return result;
        ;
        // check if scales are same
        if (this.scale === temperature.scale) {
            result = new Temperature(this.measure +
                temperature.measure, this.scale);
            return result;
        }
        else {
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
    Substract(temperature) {
        let result = new Temperature(0, "Celsius");
        return result;
    }
    Multiply(temperature) {
        let result = new Temperature(0, "Celsius");
        return result;
    }
    Divide(temperature) {
        let result = new Temperature(0, "Celsius");
        return result;
    }
    Scale() {
        let output = "";
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
    ToFahrenheit() {
        let result = 0;
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
    ToCelsius() {
        let result = 0;
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
    ToKelvin() {
        let result = 0;
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
    ToString() {
        let output = "";
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
exports.Temperature = Temperature;
module.exports = { Temperature };
