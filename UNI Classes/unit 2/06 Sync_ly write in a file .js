const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  try {
    if (req.url === '/') {
      const message = "hello, this is my node server! <br> writing in a file synchronously  ";

      // Write the message into the file synchronously
      fs.writeFileSync("writing_file.txt", message, 'utf8');

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('File Content: ' + message);
    }
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 6000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
