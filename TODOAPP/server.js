const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (html, css, js) from the current directory
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`To-Do App is running at http://localhost:${port}`);
});
