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

**Project:** Temperatures Converter

## Conversion

### US 001 Operate a temperature with another

#### Acceptation criteria

- [ ] The scale of the result must be the same of the temperature in the left
- [ ] The sum can be of temperatures from different scale
- [ ] Is possible to add another temperature (can be different scale)
- [ ] Is possible to substract another temperature (can be different scale)
- [ ] Is possible to multiply another temperature (can be different scale)
- [ ] Is possible to divide another temperature (can be different scale)

### US 002 Get tempererature Scale

- [ ] Return the scale of the temperature created

### US 003 Convert Temperature to Scale

- [ ] Return the temperature in the scale asigned
- [ ] Don't convert if the temperature asigned is the same the temperature is created. (Fahrenheit -> Fahrenheit, Celsius -> Celsius)

### US 004 Show Temperature Information

- [ ] Return the measure and scale of the temperature was created

#### Notes

Examples are:

1. 5.4800F
2. 5.48C 
3. -5.48K