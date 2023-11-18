const {bookingRepository}=require('../repository/index');
class bookingService{

    constructor(){
        this.booking=new bookingRepository();
    }

    async create(data){

        try {
            const user=await this.booking.createBooking(data);
             return user;
        } catch (error) {
            throw {error:'something went wrong in the services'}
      }
    }

    async update(flightId,data){
        try {
            const user=await this.booking.updateBooking(data,flightId);
            return user;
        } catch (error) {
            throw {error:'something went wrong in the services'}
      }
    }

    async getOne(data){
        try {
            const user=await this.booking.getBooking(data);
            return user;
        } catch (error) {
            throw {error:'something went wrong in the services'}
      }
    }

    async getDelete(data){
        try {
            const user=await this.booking.getBookingDelete(data);
            return user;
        } catch (error) {
            throw {error:'something went wrong in the services '}
      }
    }


    async getAll(){
        
        try {
            const user=await this.booking.getAllBooking();
            return user;
    
        } catch (error) {
            throw {error:'something went wrong in the services'}
      }
    }
}

module.exports=bookingService