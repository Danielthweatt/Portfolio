// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
require('dotenv').config();

// Express App Setup
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup to serve static assets (on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Routes
app.use(routes);

// API server start
app.listen(PORT, function(){
    console.log(`API server listening on PORT ${PORT}`);
});