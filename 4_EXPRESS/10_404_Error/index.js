const express = require('express');
const users = require('./users')
const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname, 'templates');

// Body
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/Users', users)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.use(function (req, res, next) {
  res.status(404).sendFile(`${basePath}/404_error.html`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});