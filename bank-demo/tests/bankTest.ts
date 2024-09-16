import Bank from '../src/bank';


const bank = new Bank();

// Bank Account Creation
const acc = bank.createAccount('Jane Doe', 25, '123456');

//scenario 1 - successful account creation
if(acc.accountNumber === '123456') {
    console.log('Scenario 1 passed');
}
else {
    console.log('Scenario 1 failed');
}

//scenario 2 - failed account creation
try {
    bank.createAccount('Jane Doe', 25, '123456');
    console.log('Scenario 2 failed');
}
catch(_) {
    console.log('Scenario 2 passed');
}

// Deposit money into an account

// scenario 1 - successful deposit
bank.deposit('123456', 100);

if (acc.balance === 100) {
    console.log('Scenario 1 passed');
} else {
    console.log('Scenario 1 failed');
}

// scenario 2 - non-existing account
try {
    bank.deposit('78900', 50);
    console.log('Scenario 2 failed');
}
catch(_) {
    console.log('Scenario 2 passed');
}

// Withdraw money from an account

//scenario 1 - successful withdrawal
bank.withdraw('123456', 50);

if (acc.balance >= 50) {
    console.log('Scenario 1 passed');
} else {
    console.log('Scenario 1 failed');
}

//scenario 2 - insufficient funds
try {
    bank.withdraw('123456', 200);
    console.log('Scenario 2 failed');
}
catch(_) {
    console.log('Scenario 2 passed');
}

//scenario 3 - non-existing account
try {
    bank.withdraw('789000', 50);
    console.log('Scenario 3 failed');
}
catch(_) {
    console.log('Scenario 3 passed');
}

