const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {

    const url = require('url').parse(req.url, true);
    const name = url.query.name

    if (!name) {
        fs.readFile('file.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })
    }

    else {
        fs.writeFile('file.txt', name, function (err, data) {
            res.writeHead(302, { Location: '/' });
            return res.end();
        })
    }

});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}.`);
});