const path = require('path');
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// --- Setup handlebars templates engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// --- setup static directory to serve, will serve index.html for roote route
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index');
});

app.get('*', (req, res) => {
  res.render('404', {
    errorText: 'Page Not Found'
  });
});

app.listen(port, () => {
  console.log('Server is up on port ', port);
});