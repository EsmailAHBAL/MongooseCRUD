const express = require('express');
const  cors = require('cors');
const  bodyParser = require('body-parser');
const Router = require('./Route/Routes');
const app =express();

const bodyParserJson = bodyParser.json();

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParserJson)


app.use('/api',Router);

app.listen(3005,()=>{

    console.log('UP');
})