# Banking System CLI Application

This application simulates a simple banking system where users can create accounts, deposit money, withdraw money, and check account balances through the command line.

## Prerequisites

Before running the application, make sure you have the following installed:

    1. Node.js
    2. TypeScript

## Installation

    1. Clone the repository or download the source code to your local machine.
    2. Open a terminal and navigate to the project folder.
    3. Run the following command to install the required dependencies:
        npm install
        tsc

## Running the Application

    1. In the terminal, navigate to the project folder (learn-user-stories).
    2. Run the application using the follwoing command:
        npx ts-node bank-demo/src/index.ts
    3. Follow the instructions in the command-line interface (CLI) to interact with the banking system. You will be prompted to choose an option for account creation, deposit, withdrawal, or checking balance.

## Running Tests

To run the tests and verify the functionality of the banking system, run the following command:
npx ts-node bank-demo/tests/bankTest.ts

## Sample Test Cases

1. <b>Bank Account Creation</b>

   Scenario 1: Successfully create a new account with a random account number.
   <p>Input: choice = 1, name = 'Jane', age = 25</p>
   <p>Output: Account created successfully: { name: 'Jane', age: 25, accountNumber: '37026', balance: 0 }</p>

2. <b>Deposit Money into an Account</b>

   Scenario 1: Successfully deposit money into an existing account.
   <p>Input: choice = 2, account number = 37026, amount to deposit = 300</p>
   <p>Output: Deposit successful</p>

   Scenario 2: Attempt to deposit money into a non-existing account.
   <p>Input: choice = 2, account number = 00000, amount to deposit = 200</p>
   <p>Output: Account not found</p>

3. <b>Withdraw Money from an Account</b>

   Scenario 1: Successfully withdraw money from an existing account.
   <p>Input: choice = 3, account number = 37026, amount to withdraw = 50</p>
   <p>Output: Withdrawal successful</p>

   Scenario 2: Attempt to withdraw money with insufficient funds.
   <p>Input: choice = 3, account number = 37026, amount to withdraw = 1000</p>
   <p>Output: Insufficient funds</p>

   Scenario 3: Attempt to withdraw money from a non-existing account.
   <p>Input: choice = 3, account number = 00000, amount = 50</p>
   <p>Output: Account not found</p>

4. <b>Check Account Balance</b>

   Scenario 1: Successfully chceck balance of an existing account.
   <p>Input: choice = 4, account number = 37026</p>
   <p>Output: Account balance: 250</p>

   Scenario 2: Attempt to check balance of a non-existing account.
   <p>Input: choice = 4, account number = 00000</p>
   <p>Output: Account not found</p>
