const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/api/user');


const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, x-auth-token");
  next();
}
  app.use(allowCrossDomain); // plumbing it in as middleware

require('./config/db')();

app.use('/user', user)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server is running on port ' + port);
} )