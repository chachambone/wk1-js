# Week 1 Toy problems

## Challenge 1: Student Grade Generator (Toy Problem)

This JavaScript function prompts the user to input a student's marks and returns the corresponding grade based on the following criteria:

- A: Marks greater than 79
- B: Marks between 60 and 79
- C: Marks between 50 and 59
- D: Marks between 40 and 49
- E: Marks below 40
The function validates the input to ensure it's a number between 0 and 100. If the input is invalid, it alerts the user accordingly.

# Speed Detector
This JavaScript function checks a car's speed and determines the appropriate penalty based on a speed limit.

## Features:
- Prompts the user for the car's speed in km/h.
- Validates the input (must be a positive number).
- If the speed is within the limit (70 km/h), it shows "Ok."
- If the speed exceeds the limit, it calculates demerit points (1 point for every 5 km/h over the limit).
- If demerit points exceed 12, the license is suspended. Otherwise, the points are displayed.

## Example:
> Speed = 85 km/h → Output: "Points: 3" (15 km/h over the limit, 3 points)


# Net Salary Calculator
This JavaScript function calculates the net salary after deductions for PAYE (tax), NHIF (National Hospital Insurance Fund), and NSSF (National Social Security Fund) based on the user's salary and benefits.

## Features:
- Prompts the user to enter their basic salary and benefits.
- Calculates the gross salary (sum of basic salary and benefits).
- Determines the appropriate tax rate based on the gross salary.
- Calculates the P.A.Y.E (Tax), NHIF deductions, and NSSF deductions.
- Displays the net salary after deductions.

## Tax Brackets:
- Gross Salary <= 24,000: 10% tax
- 24,001 <= Gross Salary <= 32,333: 25% tax
- 32,334 <= Gross Salary <= 500,000: 30% tax
- 500,001 <= Gross Salary <= 800,000: 32.5% tax
- Gross Salary > 800,000: 35% tax


# Installation and Usage

Clone the Repository: Clone the repository to your local machine using the following command:

`git clone https://github.com/chachambone/wk1-js.git`



