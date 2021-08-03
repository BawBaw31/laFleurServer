// Dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Middlewares imports

// Import routes
const scoreRoute = require('./routes/scoreRoute');


const app = express();

// Setting IN_PROD 
let IN_PROD = true;
if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
    IN_PROD = false;
}

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT, 
    { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to bd");
});

// Middleware
app.use(express.json());

// Route Middlewares
app.use('/api/score', scoreRoute);


app.listen(process.env.PORT || 3000, () => console.log('Server Up and runnig'));