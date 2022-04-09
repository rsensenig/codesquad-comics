// Require the dependency express
const express = require('express');

// Require the dependency morgan
const morgan = require('morgan');

// Create a const variable called app with the value of express()
const app = express();

// Create a const variable called port with the value of 3000
const PORT = 3000;

// Use morgan as a middleware for this project
app.use(morgan('combined'));

// Require the path module
const path = require('path');

// Use the Path module to point Node.js to the public directory that contains all of your assets (images, scripts.js, and styles.js) for your project
app.use(express.static(path.join(__dirname, 'public')));

// Configure Node.js to use EJS as its views engine
app.set('view engine', 'ejs');

// Update all 5 GET routes handlers to now render EJS files as the response from the server

// Routes
app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.get('/login', (req, res) => {
    res.render('pages/login');
});

app.get('/admin-console', (req, res) => {
    res.render('pages/admin');
});

app.get('/admin-console/create-book', (req, res) => {
    res.render('pages/create');
});

// Create 2 GET routes with parameter with the following information:
// PATH: /books/:id, HANDLER: render a file called book that will show the books details page
// PATH: /admin-console/update-book/:id, HANDLER: render the update comic book form page

app.get('/books/:id', (req, res) => {
    res.render('pages/book');
});

app.get('/admin-console/update-book/:id', (req, res) => {
    res.render('pages/update');
});

// use app.listen() to start the server and send a console.log to the terminal with the localhost URL

// Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});