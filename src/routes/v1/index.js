const {createBooking,updateBooking,getOneBooking,getAllBooking,Delete}=require('../../controllers/booking-controllers')
const express=require('express');
const router=express.Router();

router.post('/',createBooking);
router.patch('/:id',updateBooking)
router.get('/',getAllBooking);
router.delete('/:id',Delete);
router.get('/:id',getOneBooking);

module.exports=router;