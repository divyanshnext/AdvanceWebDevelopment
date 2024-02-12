const http = require('http'); // we nees to import the http module to use createserver method // require is also a method
const fs = require('fs');
const querystring = require('querystring'); 

const server = http.createServer((req, res) => {    // there should be a callback function

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
            const jsonData = querystring.parse(body).jsonData;
            const jsonString = JSON.stringify(jsonData);
            fs.writeFile('public/new.json', jsonString, (err) => {
                if (err) {
                    console.error(err);
                    res.end("Check console for error!");
                } else {
                    console.log(body);
                    res.end('JSON data received and saved'); 
                }
            });
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// server .listen ka ek shortcut bhi h use bhi dekho ???????
