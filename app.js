//https://www.youtube.com/watch?v=vjf774RKrLc

const express = require('express');
const app = express();
const mongoose = require('mongoose');
//middleware
/*
app.use('/posts', () => {
    console.log('This is a middleware running');
});
*/


//routes
app.get('/', (req,res) => {
    res.send('we are on home');
})

app.get('/posts', (req,res) => {
    res.send('we are on post');
})

//connect to database
mongoose.connect('mongodb+srv://database1:crazydatabase@maincluster.jnarl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
    console.log("connected to DB!");
});

app.listen(3000);

// username: database1
// password: crazydatabase
// mongodb+srv://database1:<password>@maincluster.jnarl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority