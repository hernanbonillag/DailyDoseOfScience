const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose= require('mongoose');

const app = express()
const port = process.env.PORT || 5000;

require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))

//Set templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')


app.listen(port,()=>console.log(`Lisening to ${port}`));

const routes = require('./server/routes/recipeRoutes.js')
app.use('/',routes);
