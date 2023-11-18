const express=require('express');

const router=express.Router();
const apiRoutes=require('./v1/index')
router.use('/v1',apiRoutes);

module.exports=router