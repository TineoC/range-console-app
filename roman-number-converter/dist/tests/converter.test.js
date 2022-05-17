"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_1 = require("../src/converter");
describe("The convertion", () => {
    describe("validate that input", () => {
        test("can't be empty", () => {
            expect((0, converter_1.converter)("")).toBe(undefined);
        });
        test("can't be null", () => {
            expect((0, converter_1.converter)(null)).toBe(undefined);
        });
        test("can't be undefined", () => {
            expect((0, converter_1.converter)(undefined)).toBe(undefined);
        });
    });
    describe("validate that program", () => {
        test("must take integer part of floating point value", () => {
            expect((0, converter_1.converter)(399.994)).toBe("CCCXCIX"); // Return value as 399
        });
    });
});
describe("Runs test cases succesfully", () => {
    test("TU01: Convert number 10 to roman", () => {
        expect((0, converter_1.converter)(10)).toBe("X");
    });
    test("TU02: Convert number 10.36 to roman", () => {
        expect((0, converter_1.converter)(10.36)).toBe("X");
    });
    test("TU03: Convert number 999.99 to roman", () => {
        expect((0, converter_1.converter)(999.99)).toBe("CMXCIX");
    });
    test("TU04: Convert number 0 to roman", () => {
        expect(() => {
            (0, converter_1.converter)(0);
        }).toThrow(`Zero value don't exist`);
    });
    test("TU05: Convert number -65 to roman", () => {
        expect(() => {
            (0, converter_1.converter)(-65);
        }).toThrow(`Negative values don't exist`);
    });
    test("TU06: Insert text in program input", () => {
        expect(() => {
            (0, converter_1.converter)("Christopher");
        }).toThrow(`String isn't a valid input`);
    });
    test("TU07: Insert object in program input", () => {
        expect(() => {
            (0, converter_1.converter)({ id: 1, name: "chris" });
        }).toThrow(`Objects aren't a valid input`);
    });
    test("TU08: Convert number 4010 to roman", () => {
        expect(() => {
            (0, converter_1.converter)(4010);
        }).toThrow(`Numbers greater than 3999 aren't allowed`);
    });
    test("TU09: Convert number 385 to roman format", () => {
        expect((0, converter_1.converter)(385)).toBe("CCCLXXXV");
    });
    test("TU10: Convert number 3845 to roman", () => {
        expect((0, converter_1.converter)(3845)).toBe("MMMDCCCXLV");
    });
    test("TU11: Convert number 48 to roman format", () => {
        expect((0, converter_1.converter)(48)).toBe("XLVIII");
    });
    test("TU12: Convert number 187 to roman", () => {
        expect((0, converter_1.converter)(187)).toBe("CLXXXVII");
    });
});
