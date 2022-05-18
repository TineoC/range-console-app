"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validSSN = void 0;
const validInput = (input) => {
    let isValidSSN = true;
    // 1. Validation
    //	1.1 It should have 9 digits
    const digitsOnSSN = input.replace(/[^0-9]/g, "").length;
    if (digitsOnSSN !== 9) {
        isValidSSN = false;
        return isValidSSN;
    }
    //	1.2 It should be divided into 3 parts by hyphen (-)
    let ssnParts = [];
    let first, second, third;
    if (input.includes("-")) {
        ssnParts = input.split("-");
        if (ssnParts.length !== 3) {
            isValidSSN = false;
            return isValidSSN;
        }
        [first, second, third] = ssnParts;
    }
    else {
        first = input.substring(0, 3);
        second = input.substring(3, 5);
        third = input.substring(5, 9);
        ssnParts.push(first, second, third);
    }
    //		1.2.1 The first part should have 3 digits and should not be 000, 666, or between 900 and 999.
    const firstInvalidStrings = ["000", "666"];
    const firstInvalidRange = parseInt(first) >= 900 &&
        parseInt(first) <= 999;
    if (first.length !== 3 ||
        firstInvalidStrings.includes(first) ||
        firstInvalidRange) {
        isValidSSN = false;
        return isValidSSN;
    }
    //		1.2.2 The second part should have 2 digits and it should be from 01 to 99.
    const secondValidRange = parseInt(second) >= 1 &&
        parseInt(second) <= 99;
    if (second.length !== 2 ||
        !secondValidRange) {
        isValidSSN = false;
        return isValidSSN;
    }
    //		1.2.3 The third part should have 4 digits and it should be from 0001 to 9999.
    const thirdValidRange = parseInt(third) >= 1 &&
        parseInt(third) <= 9999;
    if (third.length !== 4 || !thirdValidRange) {
        isValidSSN = false;
        return isValidSSN;
    }
    return isValidSSN;
};
const validSSN = (ssn) => {
    // 1. Validate
    if (ssn === "") {
        throw new Error("No SSN Received");
    }
    else if (!validInput(ssn)) {
        throw new Error("Invalid SSN");
    }
    else {
        return true;
    }
};
exports.validSSN = validSSN;
