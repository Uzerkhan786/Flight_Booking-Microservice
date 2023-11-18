
const {bookingService}=require('../services/index');

const booking=new bookingService();

const createBooking=async(req,res)=>{
     try {
        const user=await booking.create(req.body);
       // console.log(user.data);
        return res.json({
            data:user.data
        })
     } catch (error) {
        console.log("something went wrong in the controllers of create");
       return res.json({
           data:{},
           error:error,
           message:"somthing went wrong "
       })
     }
    
}


const updateBooking=async(req,res)=>{

    try {
        const user=await booking.update(req.params,req.body);
        return res.json({
            data:user
        })
     } catch (error) {
        console.log("something went wrong in the controllers of update");
       return res.json({
           data:{},
           error:error,
           message:"somthing went wrong "
       })
     }
}


const getOneBooking=async(req,res)=>{

    try {
        const user=await booking.getOne(req.params.id);
        return res.json({
            data:user
        })
     } catch (error) {
        console.log("something went wrong in the controllers of getOne");
       return res.json({
           data:{},
           error:error,
           message:"somthing went wrong "
       })
     }
}


const Delete=async(req,res)=>{

    try {
        const user=await booking.getDelete(req.params.id);
        return res.json({
            data:user,
            message:"Deleted successfully "
        })
     } catch (error) {
        console.log("something went wrong in the controllers of getOne");
       return res.json({
           data:{},
           error:error,
           message:"somthing went wrong "
       })
     }
}


const getAllBooking=async(req,res)=>{

    try {
        const user=await booking.getAll();
        return res.json({
            data:user
        })
     } catch (error) {
        console.log("something went wrong in the controllers of getAll");
       return res.json({
           data:{},
           error:error,
           message:"somthing went wrong "
       })
     }
}

module.exports={
    createBooking,
    updateBooking,
    getOneBooking,
    getAllBooking,
    Delete
}