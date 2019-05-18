const express = require("express"); //module require for the routes, they connect view and the model 
const mongoose = require("mongoose");
const rutaUsuarios = require('./controllers/users');
const config = require('./config/database');
const cors = require('cors');
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');
const rutaTutorias = require('./controllers/tutorias');
const app = express(); // express () created the express application, app inherits all the prototype from the class 

//MiddleWare : code that runs in the middle of the front and backend


//setup for database connection 
mongoose.connect(config.database.name, { useNewUrlParser: true } , (err) => {
    if (err) throw err;
});

mongoose.connection.on('connected', () => {
    console.log(`Connection to the database ${config.database.name} established`);
});


mongoose.connection.on('error', (err) => {
    console.log(`Database error ${err}`);
});

//MiddleWare 
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session()); 
require('./config/passport')(passport); //we call the file with the config for the strategy 

//main route
app.get('/', (req, res) => {
    
    res.send({person: "person"})
});

//every route for the users will be handle by these only route below 
app.use('/usuarios', rutaUsuarios);

//every route for the tutoring will be handled by the route below
app.use('/tutorias', rutaTutorias);

//port for the application 
app.listen(3000, 'localhost', (err) => {
    if (err) throw err;
    console.log('Connected to the server');
});