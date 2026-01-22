const fs = require('fs'); //file system

fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data);
});