import Bank from "./bank";
import * as readline from 'readline';

/**
 * Creates an object of the Bank class.
 */
const bank = new Bank();

/**
 * Creates a readline interface for user input and output.
 */
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Prompts the user for input and returns the response as a Promise.
 * @param {string} question - The question to ask the user.
 * @returns {Promise<string>} A Promise that resolves to the user's response.
 */
function promptUser(question: string): Promise<string> {
    return new Promise((resolve) => {
        r1.question(question, (answer: string) => {
            resolve(answer);
        });
    });
}

/**
 * Generates a random integer within a specified range.
 * @param {number} min - The minimum value of the random integer.
 * @param {number} max - The maximum value of the random integer.
 * @returns {number} A random integer within the specified range.
 */
function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Validates a name to ensure it contains only letters and spaces.
 * @param {string} name - The name to validate.
 * @returns {Promise<boolean>} A Promise that resolves to true if the name is valid, false otherwise.
 */
async function validateName(name: string): Promise<boolean> {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  }
  
  /**
   * Validates an age to ensure it is a positive integer.
   * @param {string} age - The age to validate. 
   * @returns {Promise<boolean>} A Promise that resolves to true if the age is valid, false otherwise.
   */
  async function validateAge(age: string): Promise<boolean> {
    const ageNumber = parseInt(age);
    return !isNaN(ageNumber) && ageNumber > 0;
  }

  /**
   * Validates an amount to ensure it is a positive integer.
   * @param {string} amount - The amount to validate. 
   * @returns {Promise<boolean>} A Promise that resolves to true if the amount is valid, false otherwise.
   */
  async function validateAmount(amount: string): Promise<boolean> {
    const amountNumber = parseInt(amount);
    return !isNaN(amountNumber) && amountNumber > 0;
  }

/**
 * The main entry point of the bank application.
 */
async function main() {
    let exit = false;
    while(!exit) {
        console.log("Choose an option: ");
        console.log("1. Create an account");
        console.log("2. Deposit money");
        console.log("3. Withdraw money");
        console.log("4. Check balance");
        console.log("5. Exit");

        const choice = await promptUser("Enter your choice: ");

        switch (choice) {
            case "1":
                const name = await promptUser("Enter your name: ");

                if (!await validateName(name)) {
                    console.error("Invalid name. Please enter a valid name.");
                    continue;
                }

                const age = await promptUser("Enter your age: ");
                
                if (!await validateAge(age)) {
                    console.error("Invalid age. Please enter a positive integer.");
                    continue;
                }
                const accountNumber = getRandomInt(10000, 99999);

                try {
                    const account = bank.createAccount(name, parseInt(age), accountNumber.toString());
                    console.log("Account created successfully: ", account);
                } catch (error: any) {
                    console.error(error.message);
                }
                break;
            case "2":
                const depositAccountNumber = await promptUser("Enter your account number: ");
                const depositAmount = await promptUser("Enter the amount to deposit: ");

                if (!await validateAmount(depositAmount)) {
                    console.error("Invalid amount.");
                    continue;
                }

                try {
                    bank.deposit(depositAccountNumber, parseInt(depositAmount));
                    console.log("Deposit successful");
                } catch (error: any) {
                    console.error(error.message);
                }
                break;
            case "3":
                const withdrawAccountNumber = await promptUser("Enter your accountnumber: ");
                const withdrawAmount = await promptUser("Enter the amount to withdraw: ");

                if (!await validateAmount(withdrawAmount)) {
                    console.error("Invalid amount.");
                    continue;
                }

                try {
                    bank.withdraw(withdrawAccountNumber, parseInt(withdrawAmount));
                    console.log("Withdrawal successful");
                } catch (error: any) {
                    console.error(error.message);
                }
                break;
            case "4":
                const balanceAccountNumber = await promptUser("Enter your account number: ");

                try {
                    const balance = bank.checkBalance(balanceAccountNumber);
                    console.log("Account balance:", balance);
                } catch (error: any) {
                    console.error(error.message);
                }
                break;
            case "5":
                console.log("Exiting...");
                r1.close();
                exit = true;
                return;
            default:
                console.log("Invalid choice. Please try again.");
                break;
        }
    }
}

main();