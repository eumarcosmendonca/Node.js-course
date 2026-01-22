const fs = require('fs')

fs.rename('oldFileName.txt', 'newFileName.txt', (err) => {
  if (err) {
    console.error(err)
    return
  }
  else {
    console.log('File renamed!')
  }
})