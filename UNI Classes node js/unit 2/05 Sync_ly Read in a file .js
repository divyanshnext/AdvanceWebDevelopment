const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  try {
    if (req.url === '/') {
      // Read the file content synchronously
      const fileContent = fs.readFileSync("writing_file.txt", 'utf8');

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('File Content: ' + fileContent);
    }
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 5000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
