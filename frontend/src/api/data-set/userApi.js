import { authorized } from "../common/axios";

export default{
    getUserInfo() {
        return authorized.get(`/user/get-user`)
    },
}