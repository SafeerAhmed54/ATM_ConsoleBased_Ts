# ATM Console-Based Application (TypeScript)

## Description

This is a simple ATM system implemented in TypeScript, which allows users to perform basic banking operations via a command-line interface. The ATM provides options for:

- Withdrawing money (fast cash or custom amount)
- Depositing money
- Checking the current balance
- Changing the PIN code

This project is built using the `inquirer` package for interactive prompts in the console.

## Features

- **Pin Verification**: Ensures that the user enters the correct pin before proceeding with any transaction.
- **Fast Cash Options**: Users can select predefined amounts (1000, 5000, 10000, 15000, 20000) for quick withdrawals.
- **Custom Withdrawal**: Allows the user to withdraw any amount, provided it doesn't exceed the account balance.
- **Deposit**: Users can deposit any amount into their account.
- **Balance Inquiry**: Displays the current account balance.
- **Pin Change**: Users can change their PIN after successful login.

## Requirements

- Node.js
- TypeScript
- Inquirer package (Install using `npm install inquirer`)

## Installation

1. Clone the repository or download the code to your local machine.
2. Navigate to the project folder in the terminal.
3. Install the required dependencies:

   ```bash
   npm install
