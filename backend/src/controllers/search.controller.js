import { Hotel } from "../models/hotel.model.js";


export const searchHotel = async(req,res) => {
    try {
        const pageSize = 10;
        const pageNumber = parseInt(req.query.page ? req.query.page.toString() : "1");
        const skip = (pageNumber - 1) * pageSize;
        const hotels = await Hotel.find().skip(skip).limit(pageSize);

        const total = await Hotel.countDocuments();
        const response = {
            data : hotels,
            pagination : {
                total,
                page : pageNumber,
                pages : Math.ceil(total/ pageSize)
            }
        }
        return res.status(200).send({response})
    } catch (error) {
        console.log(error)
    }
}