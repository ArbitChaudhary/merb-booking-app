import mongoose from "mongoose";
import bcryptjs from "bcryptjs"


const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
    }
}, {
    timestamps : true
})

userSchema.pre("save", async function(next) {
    if(this.isModified('password')){
        this.password = await bcryptjs.hash(this.password, 10)
    }
})

export const User = mongoose.model("User", userSchema);