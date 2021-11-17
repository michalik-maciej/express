const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
  res.show = (fileName) => {
    res.sendFile(path.join(__dirname, `/views/${fileName}`));
  };
  next();
});

app.use('/user', (req, res) => {
  res.show('forbidden.html');
})

app.use(express.static(path.join(__dirname, `/public`)));

app.get('/', (req, res) => {
  res.show('index.html');
});

app.get('/home', (req, res) => {
  res.show('index.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.use((req, res) => {
  res.status(404).show('error_404.html');
});

app.listen(8000, () => {
  console.log('server listening on port 8000');
});
