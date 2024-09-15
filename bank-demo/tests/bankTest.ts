import Bank from '../src/bank';


const bank = new Bank();

// Bank Account Creation
const acc = bank.createAccount('Jane Doe', 25, '123456');

//scenario 1
if(acc.accountNumber === '123456') {
    console.log('Scenario 1 passed');
}
else {
    console.log('Scenario 1 failed');
}

//scenario 2 
try {
    bank.createAccount('Jane Doe', 25, '123456');
    console.log('Scenario 2 failed');
}
catch(_) {
    console.log('Scenario 2 passed');
}

// Deposit money into an account

// scenario 1
bank.deposit('123456', 100);

if (acc.balance === 100) {
    console.log('Scenario 1 passed');
} else {
    console.log('Scenario 1 failed');
}

// scenario 2
try {
    bank.deposit('78900', 50);
    console.log('Scenario 2 failed');
}
catch {
    console.log('Scenario 2 passed');
}