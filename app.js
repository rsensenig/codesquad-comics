require('dotenv').config(); 
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const routes = require('./routes/index-routes');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(morgan('combined'));


app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

require('./config/connection');

// use app.listen() to start the server and send a console.log to the terminal with the localhost URL

// Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});