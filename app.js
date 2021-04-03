//Main tutorial:
//https://www.youtube.com/watch?v=vjf774RKrLc

//potential solution to problem:
//https://www.youtube.com/watch?v=0IMz8d9Cby4

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//middlware
app.use(bodyParser.json());

//THIS DOESN'T WORK 
/*
app.get("*", (req,res) =>  {
    res.setHeader("Access-Control-Allow-Origin", "*");
} );
*/

app.use((req,res,next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//routes
app.get('/', (req,res) => {
    res.send('we are on Home');
    res.setHeader("Access-Control-Allow-Origin", "*");
})

const mongoURI = require('./mongo');
//connect to database
mongoose.connect(mongoURI.returnURI(), () => {
    console.log("connected to DB!");
});

app.listen(3000);

