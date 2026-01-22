// name
console.log(process.argv);
const argument = process.argv.slice(2);
console.log(argument);
const name = argument[0].split('=')[1];
const surname = argument[1].split('=')[1];
console.log(`Hello! My name is ${name} ${surname}.`);