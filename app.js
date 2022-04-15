// Require the dependency express
const express = require('express');

// Require the dependency morgan
const morgan = require('morgan');

// Require the dependency method override
const methodOverride = require('method-override');

// Require the index-routes.js file
const routes = require('./routes/index-routes');

// Require the path module
const path = require('path');

// Create a const variable called app with the value of express()
const app = express();

// Create a const variable called port with the value of 3000
const PORT = 3000;

// Use morgan as a middleware for this project
app.use(morgan('combined'));

// Use the Path module to point Node.js to the public directory that contains all of your assets (images, scripts.js, and styles.js) for your project
app.use(express.static(path.join(__dirname, 'public')));

// Use method override as middleware for this project
app.use(methodOverride());

// Use express URLEncoded
app.use(express.urlencoded({extended: true}));

// Use app.use() method to go to index-router.js
app.use(routes);

// Configure Node.js to use EJS as its views engine
app.set('view engine', 'ejs');

// use app.listen() to start the server and send a console.log to the terminal with the localhost URL

// Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});