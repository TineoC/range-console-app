| **Test Case ID** | **Test Case Description** | **Test Steps**                                                    | **Test Data**        | **Expected Result**    | **Test Result** |
|------------------|---------------------------|-------------------------------------------------------------------|----------------------|------------------------|-----------------|
| TU01             | Validate SSN 01-01-01     | 1. Run the program. 2. Enter 01-01-01 in console. 3. Hit Enter    | input = 01-01-01     | Error: Invalid SSN     | Failed          |
| TU02             | Validate SSN 001-65-7251  | 1. Run the program. 2. Enter 001-65-7251 in console. 3. Hit Enter | input = 001-652-7251 | Valid SSN              | Success         |
| TU03             | Validate SSN 001-65-0000  | 1. Run the program. 2. Enter 001-65-0000 in console. 3. Hit Enter | input = 001-65-0000  | Error: Invalid SSN     | Failed          |
| TU04             | Validate 001650000        | 1. Run the program. 2. Enter 001650000 in console. 3. Hit Enter   | input = 001650000    | Error: Invalid SSN     | Failed          |
| TU05             | Validate SSN 001657251    | 1. Run the program. 2. Enter 001657251 in console. 3. Hit Enter   | input = 001657251    | Valid SSN              | Success         |
| TU06             | Validate SSN 00112233     | 1. Run the program. 2. Write 00112233 in console 3. Hit Enter     | input = 00112233     | Error: Invalid SSN     | Failed          |
| TU07             | Validate SSN 001122333    | 1. Run the program. 2. Write 001122333 3. Hit Enter               | input = 001122333    | Valid SSN              | Success         |
| TU08             | Validate 000-15-5562      | 1. Run the program. 2. Write 000-15-5562 in console 3. Hit Enter  | input = 000-15-5562  | Error: Invalid SSN     | Failed          |
| TU09             | Validate no input         | 1. Run the program. 2. Hit Enter                                  | input = ''           | Error: No SSN Received | Failed          |
| TU10             | Validate 'Christopher'    | 1. Run the program 2. Write Christopher in console 3. Hit Enter   | input = Christopher  | Error: No SSN Received | Failed          |