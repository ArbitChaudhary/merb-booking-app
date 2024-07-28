import { authorized } from "../common/axios";

export default{
    addHotel(params){
        return authorized.post(`/hotel/create-hotel`, params, {headers : {"Content-Type" : "multipart/form-data"}})
    },
    getMyHotels(){
        return authorized.get(`/hotel/my-hotels`)
    },
    getMyHotel(hotel_id){
        return authorized.get(`/hotel/${hotel_id}`);
    },
    updateHotel(hotel_id, params){
        return authorized.put(`/hotel/${hotel_id}`, params, {headers : {"Content-Type" : "mutlipart/form-data"}})
    }
}