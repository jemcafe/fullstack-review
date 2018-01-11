const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');

require('dotenv').config();

const app = express();

app.use( bodyParser.json() );
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

massive( process.env.CONNECTION_STRING).then( db => app.set('db', db) ).catch( err => console.log('err', err) );


app.post('/login', ( req, res ) =>{
    res.status(200).json({ user: { name: 'Hyper Toast' } })
});


const port = 3035;
app.listen( port, () => console.log( `listening on port: ${port}` ) );