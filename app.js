const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const tasks = require('./routes/api/tasks');

const port = process.env.PORT || 5000;

const app = express();
const db = require('./config/keys').mongoURI;
// Connect database using mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err));

// Setup middlware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);


// Setup base routes
app.use('/api/users', users);
app.use('/api/tasks', tasks);
app.get('/', (req, res) => res.send('Hello Wrld'));


// Lastly, setup our app to listen
app.listen(port, () => console.log(`Server is running on port ${port}`));
