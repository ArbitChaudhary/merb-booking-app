import cloudinary from "cloudinary"
import { Hotel } from "../models/hotel.model.js";

export const createHotel = async(req, res) => {
    // let hotel = req.body;
    try {
        const imageFiles = req.files;
        let newHotel = req.body;
        const uploadPromises = imageFiles?.map(async (image) => {
            const b64 = Buffer.from(image.buffer).toString("base64");
            let dataURI = "data:" + image.mimetype + ";base64," + b64;
            const res = await cloudinary.v2.uploader.upload(dataURI);
            return res.url;
        })
        const imageUrls =  await Promise.all(uploadPromises);

        newHotel.imageUrls = imageUrls;
        newHotel.userId = req.userId;

        const hotel = new Hotel(newHotel);
        await hotel.save();
        return res.status(200).send({message : "Hotel created"})
    } catch (error) {
        console.log(error);
        return res.status(500).send({message : "Something went wrong", error})
    }    
}

export const getMyHotels = async(req, res) => {
    const userId = req.userId;
    try {
        const myHotelList = await Hotel.find({userId});
        if(!myHotelList) {
            return res.status(404).send()
        }
        return res.status(200).send({message : "Fetched all my hotels", myHotelList});
    } catch (error) {
        return res.status(500).send({message : "Something went wrong"})
    }
}

export const getMyHotel = async(req, res) => {
    const hotelId = req.params.hotel_id;
    try {
        const hotel = await Hotel.findById(hotelId);
        if(!hotel){
            return res.status(404).send
        }
        return res.status(200).send(hotel)    
    } catch (error) {
        return res.status(500).send({message : "Something went wrong"})
    }
}

export const updateMyHotel = async(req, res) => {
    const  hotelId  = req.params.hotel_id;
    
    try {
        const updatedHotel = req.body;
        const hotel = await Hotel.findByIdAndUpdate(hotelId, {updatedHotel}, { new : true});
        console.log("This")
    const imageFiles = req.files;
    const uploadPromises = imageFiles?.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURI = "data:" + image.mimetype + ";base64," + b64;
        const res = await cloudinary.v2.uploader.upload(dataURI);
        return res.url;
    })
    const imageUrls =  await Promise.all(uploadPromises);
    hotel.imageUrls = [...imageUrls, ...(updatedHotel.imageUrls || [])];
    await hotel.save();
    return res.status(200).send({message : "Hotel Updated"})
        // hotel = 
    } catch (error) {
        return res.status(500).send({message : "Something went wrong"})
    }
}