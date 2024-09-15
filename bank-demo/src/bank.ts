// Indicates the type for all bank accounts in the bank
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * This class represents a simple bank with the ability to create new accounts
 */
export default class Bank {
    // Array to store all bank accounts in the bank
    private accounts: BankAccount [] = [];

    /**
     * This method checks if an account with the given account number exists
     * @param {string} accountNumber The account number of the bank account to find
     * @returns bank account if the account exists, undefined otherwise
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(acc => acc.accountNumber === accountNumber)
    }

    /**
     * creates a new account with a unique account number
     * @param {string} name -- name of the customer
     * @param age -- age of the customer
     * @param accountNumber -- account number of the customer
     * @returns BankAccount -- the created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.findAccount(accountNumber);

        if(isAccExists) {
            throw new Error('Account already exists');
        }
        const account: BankAccount = {
            name, 
            age, 
            accountNumber, 
            balance: 0
        };
        this.accounts.push(account);

        return account;
    }

    /**
     * deposits money into an existing account
     * @param {string} accountNumber -- account number of customer
     * @param {number} amount -- amount to be deposited into the account
     */
    public deposit(accountNumber: string, amount: number): void {
        const account = this.findAccount(accountNumber);

        if (!account) {
            throw new Error('Account not found');
        }
        account.balance += amount;
    }
}