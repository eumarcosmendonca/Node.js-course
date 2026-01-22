const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Type a number? ', (number1) => {
    if (!Number(number1)) {
        throw new Error('This is not a number!');
    }
    else {
        readLine.question('Type another number? ', (number2) => {
            if (!Number(number2)) {
                throw new Error('This is not a number!');
            }
            else {
                const sum = Number(number1) + Number(number2);
                console.log(`The sum is: ${sum}`);
                readLine.close();
            }
        });
    }
});