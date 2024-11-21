
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
   ```

4. Compile the TypeScript code to JavaScript:

   ```bash
   tsc
   ```

5. Run the application:

   ```bash
   node dist/index.js
   ```

## Usage

1. When you run the application, you will be prompted to enter your PIN.
2. If the correct PIN is entered, you can choose one of the following options:
   - **Withdraw**: Withdraw money either through predefined fast cash options or by entering a custom amount.
   - **Deposit**: Deposit money into the account.
   - **Get Balance**: Check your account balance.
   - **Change Pin**: Change your current PIN.

3. If the wrong PIN is entered, an error message will be displayed.

### Sample Interaction:

```text
Please Enter your Pincode: 1234

What do you want to do?
- Withdraw
- Deposit
- Get Balance
- Change Pin

You have selected: Withdraw

How much do you want to withdraw?
- Fast Cash
- Other Amount

You have selected: Fast Cash

What do you want to do?
- 1000
- 5000
- 10000
- 15000
- 20000

You have selected: 5000
You have withdrawn 5000$
The amount remaining in your account is 161836$
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
