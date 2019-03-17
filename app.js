//express module for routing the application 
const express = require ('express');
const homePage = require('./controllers/homeCtrl');

var app = express();


//homeindexconroller
homePage.homePageCtrl(app);


//listen to port
app.listen(3000, 'localhost');