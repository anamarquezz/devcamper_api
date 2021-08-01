const express = require('express');
const router = express. Router();


router.get('/',(req, res) => { 
    res.status(200).json({success:true, msg:'show all bootcamps'}); 
   // res.json({name: 'Ana'});
     // res.send('<h1>Hello from express</h1>');
   // res.status(400).json({success:false}); 
 });   
 
 router.post('/',(req, res) => { 
    res.status(200).json({success:true, msg:'create new bootcamp'});  
 });
 
 router.get('/:id',(req, res) => { 
     res.status(200).json({success:true, msg:`Show bootcamp ${req.params.id}`});   
  });
 
 router.delete('/:id',(req, res) => { 
     res.status(200).json({success:true, msg:`Delete bootcamp ${req.params.id}`});   
  });
  
 
  router.put('/:id',(req, res) => { 
     res.status(200).json({success:true, msg:`Update bootcamp ${req.params.id}`});   
  });

module.exports = router;