const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    const url = require('url').parse(req.url, true)
    const name = url.query.name
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    if (!name) {
        res.end('<h1>Type your name:</h1> <form method="GET"><input type="text" name="name"/><input type="submit" value="Submit"/></form>')
    }
    else {
        res.end(`<h1>Hello, ${name}! Welcome!</h1>`)
    }
})

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/.`)
})