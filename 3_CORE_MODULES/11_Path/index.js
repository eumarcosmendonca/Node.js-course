const path = require('path');

const filePath = '/users/Marcos.pdf';

console.log('Directory Name: ', path.dirname(filePath));
console.log('Base Name: ', path.basename(filePath));

// Absolute Path
console.log('Absolute Path: ', path.resolve('text.txt'));

// Unite Path
const path1 = '/users/';
const path2 = 'Marcos.pdf';
const finalPath = path.join('/', 'text', path1, path2);
console.log('Joined Path: ', finalPath);