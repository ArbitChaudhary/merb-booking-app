import jwt from "jsonwebtoken"

const verifyToken = async(req, res, next) => {
    const header = req.headers['authorization'];
    const token = header?.split(" ")[1];
    if(!token){
        return res.status(403).send({message : "Foridden"})
    }
    
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
        if(error){

            return res.status(403).send({message : "Unauthorized"});
        }
        req.userId = user.userId;
        next();
    });
}
export default verifyToken;