// external modules
const inquirer = require('inquirer');
const chalk = require('chalk');

// internal modules
const fs = require('fs');

operation();

function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Select an action for Account management:',
            choices: [
                'Create Account',
                'Check Balance',
                'Deposit',
                'Withdraw',
                'Exit'
            ]
        }
    ]).then(answer => {
        const action = answer.action;
        switch (action) {
            case 'Create Account':
                createAccount();
                break;
            case 'Check Balance':
                checkBalance();
                break;
            case 'Deposit':
                deposit();
                break;
            case 'Withdraw':
                withdraw();
                break;
            case 'Exit':
                console.log(chalk.green('Exiting Account management.'));
                process.exit();
        }
    });
}

function createAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Enter a name for your new account: '
        }
    ]).then(answer => {
        const accountName = answer.accountName;
        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts');
        }
        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.red('Account already exists! Choose a different name.'));
            return createAccount();
        }
        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}');
        console.log(chalk.green(`Account ${accountName} created successfully!`));
        operation();
    });
}

function checkBalance() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Enter your account name: '
        }
    ]).then(answer => {
        const accountName = answer.accountName;
        if (!fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.red('Account does not exist!'));
            return operation();
        }
        const data = fs.readFileSync(`accounts/${accountName}.json`, 'utf8');
        const account = JSON.parse(data);
        console.log(chalk.green(`Account ${accountName} has a balance of $${account.balance}.`));
        operation();
        });
}

function deposit() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Enter your account name: '
        }
    ]).then(answer => {
        const accountName = answer.accountName;
        if (!fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.red('Account does not exist!'));
            return operation();
        }
        const data = fs.readFileSync(`accounts/${accountName}.json`, 'utf8');
        const account = JSON.parse(data);
        inquirer.prompt([
            {
                    name: 'amount',
                    message: 'Amount to deposit: '
            }
        ]).then(answer => {
            const amount = parseFloat(answer.amount);
            account.balance = account.balance + amount;
            fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(account));
            console.log(chalk.green(`Deposited $${amount} to account ${accountName}. New balance is $${account.balance}.`));
            operation();
        });
    });
};

function withdraw() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Enter your account name: '
        }
    ]).then(answer => {
        const accountName = answer.accountName;
        if (!fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.red('Account does not exist!'));
            return operation();
        }
        const data = fs.readFileSync(`accounts/${accountName}.json`, 'utf8');
        const account = JSON.parse(data);
        inquirer.prompt([
            {
                name: 'amount',
                message: 'Amount to withdraw: '
            }
        ]).then(answer => {
            const amount = answer.amount;
            if (amount > account.balance) {
                console.log(chalk.red('Insufficient funds!'));
                return operation();
            }
            account.balance = account.balance - amount;
            fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(account));
            console.log(chalk.green(`Withdrew $${amount} from account ${accountName}. New balance is $${account.balance}.`));
            operation();
        });
    });
};