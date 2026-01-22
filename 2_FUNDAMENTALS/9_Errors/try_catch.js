const readLine = require('readline/promises')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

try {
    const answer1 = await rl.question('Enter the first number? ');
    const n1 = Number(answer1);
    const answer2 = await rl.question('Enter the second number? ');
    const n2 = Number(answer2);
    const sum = n1 + n2;
    console.log(`The sum is: ${sum}`);
}
catch (error) {
    console.log(`Error: ${error.message}`);
}
finally {
    rl.close();
}