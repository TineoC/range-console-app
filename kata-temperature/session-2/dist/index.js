"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperature = void 0;
class Temperature {
    constructor(measure, scale) {
        this.measure = measure;
        this.scale = scale;
    }
    ToKelvin() {
        let result = 0;
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
    ToCelsius() {
        let result = 0;
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
    ToFahrenheit() {
        let result = 0;
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
    Scale() {
        return this.scale;
    }
    ToString() {
        let parse = "";
        let measure = this.measure;
        let scale = this.scale;
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
exports.Temperature = Temperature;
