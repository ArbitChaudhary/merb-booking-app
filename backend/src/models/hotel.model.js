import mongoose from "mongoose";

const hotelSchema = mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true,
    },
    country : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    pricePerNight : {
        type : Number,
        required : true,
    },
    childCount : {
        type : Number,
    },
    adultCount : {
        type : Number, 
        required : true,
    },
    type : {
        type : String,
        required : true,
    },
    facilities : [
        {
            type : String,
            required : true
        }
    ],
    imageUrls : [
        {
            type : String,
            required : true
        }
    ],
})

export const Hotel = mongoose.model("Hotel", hotelSchema);