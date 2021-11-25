const express = require('express');
const path = require('path');
const app = express();
const hbs = require('express-handlebars');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


/* Initial config */
app.engine('hbs', hbs());
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false })); //config for Postman
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());


/* Post requests */
app.post('/contact/send-message', upload.single('projectFile'), (req, res) => {
  const { author, sender, title, message } = req.body;

  if (author && sender && title && message && req.file) {
    res.render('contact', { projectFileName: req.file.originalname, isSent: true });
  }
  else {
    res.render('contact', { isError: true });
  }
})


/* Get requests */
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { name: req.params.name });
})

app.get('/about', (req, res) => {
  res.render('about');
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


/* Not found response */
app.use((req, res) => {
  res.status(404).send('404 not found...');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
