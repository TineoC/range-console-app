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

**Project:** Social Secutiry Number Validator

## Conversión

### US 001 Validate SSN

**As a**: user

**I want to**: write my ssn

**So that**: know if my ssn is valid

**Description**:

First we get for console asking for the input for the ssn to validate

Then, we are getting response depending if is valid or not

**Estimate:**: 0.5 day

**Priority**: 100

**Status**: In Progress

### Acceptation criteria

- [ ] It should have 9 digits.
- [ ] It should be divided into 3 parts by hyphen (-).
  - [ ] The first part should have 3 digits and should not be 000, 666, or between 900 and 999.
  - [ ] The second part should have 2 digits and it should be from 01 to 99.
  - [ ] The third part should have 4 digits and it should be from 0001 to 9999.
- [ ] You can write an SSN with (-) or without it, it should pass anyway.
  
### Notes

Zeros matter in the input