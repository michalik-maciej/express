const express = require('express');
const path = require('path');
const app = express();
const hbs = require('express-handlebars');

app.engine('hbs', hbs());
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { name: req.params.name });
})

app.get('/about', (req, res) => {
  res.render('about', { layout: 'dark' });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/history', (req, res) => {
  res.render('history');
});

app.get('/info', (req, res) => {
  res.render('info');
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
