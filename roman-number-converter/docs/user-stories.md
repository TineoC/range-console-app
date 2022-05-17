<!-- 
The title ***MUST***follow the verb/noun template discussed in class.

- As a (user or stakeholder type):
  - I want to (some software feature):
  - So that (some business value): 

Estimate ***MUST***be one of the following values in days of work:
    0.5 days (3–4 hours of work)
    1 day (6–8 hours)
    1.5 days (around 12 hours)
    2 days (around 16 hours)
    3 days (around 24 hours)
    5 days (around 40 hours)

Priority ***MUST***be a number from 10 to 100.

Status ***MUST***be one of the following:
    Not started
    In progress
    Completed-intermediate
    Completed-final 
-->

# User Stories

**Project:** Roman Number Converter

## Conversión

### US 001 Convertir número

**As a**: user

**I want to**: write an arabig number

**So that**: I get the same number in a roman format

**Description**:

First we get for console asking for the input for the number to be converted

Then, we are given with the value in roman

**Estimate:**: 1.5 day

**Priority**: 100

**Status**: Not started

### Acceptation criteria

- [ ] Input ***MUST NOT*** be a negative number, otherwise error should be prompt.
- [ ] Input ***MUST NOT*** be zero, otherwise error should be prompt.
- [ ] Input ***MUST NOT*** be empty, null or undefined value.
- [ ] The input ***MUST*** be a number, either integer or floating point decimal, strings or other kind of data aren't accepted.
- [ ] Convertion ***MUST*** take only integer part of floating point value.
- [ ] The input ***MUST*** be between 1 to 3999, otherwise prompt error.

### Notes

![Roman Convertion](https://www.thecrazyprogrammer.com/wp-content/uploads/2017/09/Convert-Decimal-Number-to-Roman-Numeral-in-C-and-C.png?ezimgfmt=rs:146x273/rscb1/ng:webp/ngcb1)

*The outputs should be as short as possible*