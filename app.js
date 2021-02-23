//https://www.youtube.com/watch?v=vjf774RKrLc

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//middlware
app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//routes
app.get('/', (req,res) => {
    res.send('we are on Home');
})

const mongoURI = require('./mongo');
//connect to database
mongoose.connect(mongoURI.returnURI(), () => {
    console.log("connected to DB!");
});

app.listen(3000);

