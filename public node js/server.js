const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, 'public', 'form.html'), 'utf8', (err, data) => {
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
            body += chunk;
        });

        req.on('end', () => {
            const jsonData = JSON.parse(body);
            const jsonString = JSON.stringify(jsonData);

            fs.writeFile(path.join(__dirname, 'public', 'new.json'), jsonString, (err) => {
                if (err) {
                    console.error(err);
                    res.end("Check console for error!");
                } else {
                    res.end('JSON data received and saved');
                }
            });
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
