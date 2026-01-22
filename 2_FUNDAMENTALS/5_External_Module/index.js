const minimist = require('minimist');
const argument = minimist(process.argv.slice(2));
const name = argument['name'];
const age = argument['age'];
console.log(`Hello! My name is ${name} and I am ${age} years old.`);