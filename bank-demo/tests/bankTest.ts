import Bank from '../src/bank';

//scenario 1
const bank = new Bank();
const acc = bank.createAccount('Jane Doe', 25, '123456');

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