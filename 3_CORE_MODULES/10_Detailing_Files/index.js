const fs = require('fs');

fs.stat('file.txt', (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  else {
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.ctime);
    console.log(stats.size);
  }
});