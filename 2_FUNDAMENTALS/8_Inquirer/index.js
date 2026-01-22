const inquirer = require('inquirer')

inquirer
    .prompt([
        {
        name: 'score1',
        message: "What's your first rating?",
        },
        {
        name: 'score2',
        message: "What's your second rating?",
        },
    ]).then(answers => {
        const average = (Number(answers.score1) + Number(answers.score2)) / 2;
        if (average >= 7) {
            console.log('Congratulations! You were approved! Your average score is: ', average, '.');
        }
        else {
            console.log('Sorry, you were not approved. Your average score is: ', average, '.');
        }
    }).catch(error => {
    console.error(error);
});