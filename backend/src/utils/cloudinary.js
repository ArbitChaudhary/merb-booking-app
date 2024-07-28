import { v2 as cloudinary } from "cloudinary";
import fs from "fs"
import { loadEnvFile } from "process";

cloudinary.config({
    cloud_name : "dsc65mxay",
    api_key : "637386491822784",
    api_secret : "6fk--Mf6uge7zsE5Jqf9zLmgvhQ"
});

const uploadOnCloudinary = async(localFilePath) => {
    try {
        if(!localFilePath){
            return null
        }
        const res = await cloudinary.uploader.upload(localFilePath, {
            resource_type : "auto"
        })
        return res;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove locally saved file as upload operation failed
        return null
    }
}


export default uploadOnCloudinary