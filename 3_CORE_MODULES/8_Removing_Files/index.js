const fs = require('fs')

fs.unlink('file.txt', (err) => {
  if (err) {
    console.error(err)
    return
  }
  else {
    console.log('File deleted!')
  }
})