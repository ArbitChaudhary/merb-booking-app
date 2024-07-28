import { authorized } from "../common/axios";

export default {
    registerUser(params){
        return authorized.post("/auth/register", params)
    },
    signInUser(params) {
        return authorized.post("/auth/sign-in", params)
    }
}