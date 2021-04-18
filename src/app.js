const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const getData = require('./utils/getData');
//create paths for express
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partialas');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.get('', (req, res) => {
  res.render('index');
});
app.get('/movies', (req, res) => {
  getData((error, data) => {
    if (error) {
      return res.send({
        error,
      });
    } else {
      res.send({
        data,
      });
    }
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    errorMessage: 'Page didnt find!!',
  });
});
app.listen(3000, () => {
  console.log('Server listening....');
});
