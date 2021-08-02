const express = require('express');
const dotenv = require('dotenv');
//onst logger = require('./middleware/logger');
const morgan = require('morgan');

// ROUTE files
const bootcamps = require('./routes/bootcamps');
//Loaad env vars

dotenv.config({path: './config/config.env'});


const app = express();

// Dev login Middleware
if(process.env.NODE_ENV === 'development'){
   app.use(morgan('dev'));
}


// Mount routers
//app.use(logger);
app.use('/api/v1/bootcamps', bootcamps)



const PORT = process.env.PORT || 5000;

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
