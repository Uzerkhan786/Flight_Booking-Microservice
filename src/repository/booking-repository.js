const {Booking}=require('../models/index')


class bookingRepository{

    async createBooking(data){
        try {
            const user=await Booking.create(data);
            return user;
        } catch (error) {
            throw {error:'something went wrong in the repository'}
      }
        
    }

    async getBooking(data){
        try {
            const user=await Booking.findByPk(data);
           return user;
        } catch (error) {
            throw {error:'something went wrong in the repository'}
      }
        
    }


    async updateBooking(data,flightId){
        try {
            const user=await Booking.update(data,{
                where:{
                    id:flightId.id
                }
            });
           return user;
        } catch (error) {
              throw {error:'something went wrong in the repository'}
        }
        
    }

    async getBookingDelete(id){
        try {
            const user=await Booking.destroy({
                where:{
                    id:id
                }
            })
            return user;
        } catch (error) {
            throw {error:'something went wrong in the repository'}
      }
    }

    async getAllBooking(){
        try {
            const user=await Booking.findAll();
            return user;
        } catch (error) {
            throw {error:'something went wrong in the repository'}
      }
    }
}

module.exports=bookingRepository
