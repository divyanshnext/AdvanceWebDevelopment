const fs = require('fs');
const http = require('http');
const url = require('url');
const queryString = require('querystring');

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    const indexPath = 'UNI Classes node js\unit 2\16 form for backend.js';

    if (req.method === 'GET' && reqUrl.pathname === '/') {
        fs.readFile("UNI Classes node js\unit 2\16 form for backend.js", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'POST' && reqUrl.pathname === '/submit') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const formData = queryString.parse(body);
            console.log('Form data received:', formData);

            const { name, email } = formData;
            
            // Write the form data to a file
            fs.writeFile('form_data.txt', `Name: ${name}\nEmail: ${email}\n`, (err) => {
                if (err) {
                    console.error('Error writing form data to file:', err);
                } else {
                    console.log('Form data has been written to form_data.txt');
                }
            });

            // Sending a response back to the client
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Form data received and processed.');
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
