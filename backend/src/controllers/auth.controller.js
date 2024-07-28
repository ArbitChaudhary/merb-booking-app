import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs"

export const registerUser = async(req, res) => {
    const { email } = req.body;
    const user = await User.findOne({email});
    if(user) {
        return res.status(409).send({message : "Email already exists"});
    }
    try {
        const newUser = await User.create(req.body);
        const createdUser = await User.findById(newUser._id);
        if(!createdUser){
            return res.status(500).send({message : "Something went wrong"});
        }
        return res.status(200).send({message : "User created successfully"});
    } catch (error) {
        return res.status(500).send({message : "Something went wrong"});
    }
}

export const signInUser = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).send({message : "User does not exists"})
        }
        const matchPassword = await bcryptjs.compare(password, user.password);
        if(!matchPassword){
            return res.status(400).send({message : "Invalid credentials"})
        }
        const token = jwt.sign({userId : user._id}, process.env.JWT_SECRET_KEY, {
            expiresIn : '1d'
        });
        return res.status(200).send({message : 'User logged in successfully', token})
    } catch (error) {
        return res.status(500).send({message : "Something went wrong", error})
    }

}