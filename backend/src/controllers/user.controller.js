import { User } from "../models/user.model.js";

export const getUser = async(req, res) => {
    const userId = req.userId;
    try {
        const user = await User.findById(userId).select("-password");
        if(!user){
            return res.status(404).send({message : "User does not exist"});
        }
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({message : "Something went wrong"});   
    }
}