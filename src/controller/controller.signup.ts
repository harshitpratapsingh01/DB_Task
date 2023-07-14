import { User } from "../models/schema";
import  express  from "express";

const user_SignUp = async (req: any, res: any) => {
    const details = req.body;
    console.log(req.body);
    try{
        await User.create(details);
        res.status(200).json({status:"SignUp Success"});
    }
    catch(err){
        res.status(500).json({status:"server error"});
    }
}

export {user_SignUp};