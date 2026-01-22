const { default: chalk } = require('chalk');

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("What's your rating? ", (score) => {
    if (score >= 7) {
        console.log(chalk.green('Congratulations! You were approved!'));
    }
    else {
        console.log(chalk.red('Sorry, you were not approved.'));
    }
    rl.close();
});