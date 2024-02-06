const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile('public/form.html', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.end("There is some error");
            } else {
                res.end(data);
            }
        });
    } else if (req.url === "/save-json" && req.method === "POST") {
        let body = "";

        req.on('data', (chunk) => {
            console.log(chunk)
            body += chunk;
        });

        req.on('end', () => {
            console.log(body);
            res.end('JSON data received and saved');
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// server .listen ka ek shortcut bhi h use bhi dekho ???????
