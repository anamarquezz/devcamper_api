const express = require('express');
const dotenv = require('dotenv');
//onst logger = require('./middleware/logger');
const morgan = require('morgan');



//Loaad env vars
dotenv.config({path: './config/config.env'});
const connectDB = require('./config/db');

//Connect to database
connectDB();

// ROUTE files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Dev login Middleware
if(process.env.NODE_ENV === 'development'){
   app.use(morgan('dev'));
}


// Mount routers
//app.use(logger);
app.use('/api/v1/bootcamps', bootcamps)



const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//Handle unhandled promise rejections
process.on('unhandledRejection',(err, Promise) => {
    console.log(`Error: ${err.message}`);
    //Close server & exit process
    server.close(() => process.exit(1));
})