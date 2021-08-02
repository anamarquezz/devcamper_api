
// @desc LOGS request to console
const logger = (req, res, next) =>{
    req.hello = 'Hello Workd';
    console.log('Middeware ran');
    console.log(`${req.method} ${req.protocol}://${req.get('host')} ${req.originalUrl}`);
    next();   
 }

 module.exports = logger;
 