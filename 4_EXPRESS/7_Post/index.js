const express = require('express');
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

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
})

app.post('/users/save', (req, res) => {
  console.log(req.body)
  const name = req.body.name
  const age = req.body.age
  console.log(`Name: ${name}, Age: ${age}`)
  res.sendFile(`${basePath}/users.html`);
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id
  console.log(`Searching for user: ${id}`)
  res.sendFile(`${basePath}/users.html`);
});

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});