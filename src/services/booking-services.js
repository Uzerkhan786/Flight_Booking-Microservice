const {bookingRepository}=require('../repository/index');
const axios=require('axios');
class bookingService{

    constructor(){
        this.booking=new bookingRepository();
    }

    async create(data){

        try {
            
            const flightId=data.flightId
           //console.log(flightId);
            const a=await axios.get(`http://localhost:5000/api/v1/flights/${flightId}`);
            const cost=a.data.data.price;
            //console.log(cost);
           
            const user=await this.booking.createBooking({...data,totalCost:cost});
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