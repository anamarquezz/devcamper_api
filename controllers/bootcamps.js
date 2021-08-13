const ErrorResponse = require('../utils/errorResponse')
const Bootcamp = require('../models/Bootcamps');

// @desc    GET all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
    try{
        const bootcamps = await  Bootcamp.find();
       
        res.status(200).json({ sucess: true, count: bootcamps.length, data: bootcamps });
       
    }catch (err){      
        next(err);
    }
  /*  res.status(200).json({
        msg: 'show all bootcamps',
        hello:req.hello
    });*/
};

// @desc    GET single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
  try{
    const bootcamp = await Bootcamp.findById(req.params.id);
    console.log(bootcamp);

    if (!bootcamp){
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({ sucess: true, data: bootcamp});
  }catch (err) {
   // res.status(400).json({ sucess:false,});
   next(err);
  }
  
};

// @desc    Create new  bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            success:true,
            data:bootcamp
        });

    }catch (err){
        next(err);
    }
   

    /*console.log(req.body);
    res.status(200).json({
        success: true,
        msg: 'create new bootcamp'
    });*/
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runvalidators:true
        });

        if(!bootcamp){
            return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
        }
        res.status(200).json({sucess:true, data:bootcamp});
    }catch (err){
        next(err);
}
};

// @desc    DELETE bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        console.log(bootcamp);
        if(!bootcamp){
            return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
        }
        res.status(200).json({sucess:true, data:{}});
    }catch (err){
        next(err);
    }
};