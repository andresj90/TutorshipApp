const express = require("express"); //module require for the routes, they connect view and the model 
const rutaUsuarios = require('./controllers/users');

const app = express(); // express () created the express application, app inherits all the prototype from the class 

//MiddleWare : code that runs in the middle of the front and backend


//main route
app.get('/', (req, res) => {
    res.status(404).send("Sorry could not find resource");
});

//every route for the users will be handle by these only route below 
app.use('/usuarios', rutaUsuarios);

//port for the application 
app.listen(3000, 'localhost', (err) => {
    if (err) throw err;
    console.log('Connected to the server');
});