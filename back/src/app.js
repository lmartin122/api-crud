const express = require('express');
const path = require('path');
const cors = require('cors');

const connection = require('./db/connection');
const productsRoutes = require('./routes/products');
const productsSchema = require('./models/products');



const app = express();
app.use(express.json());
app.use(cors({
        origin: 'http://localhost:4200'
    }));

app.use('/api',productsRoutes)

app.use('/',(req,res,next) => {
        console.log('first');
        res.send('<p> Welcome to my API <p>')
})



connection(); //conexion con la base
app.listen(3000);

