import { User } from "../models/schema";
import express from 'express';

const loginUser = async(req: any, res: any)=> {
    const details = req.body;
    try{
        const isUser = await User.findOne({where:{username: details.username}});
        if(isUser!=null){
            console.log(isUser);
            res.status(200).json({status: "loggedIn Successfully"});
        }
        else{
            res.status(404).json({status: "not found"});
        }
    }
    catch(err){
        res.status(500).json({status: "Server Error"});
    }
}

export {loginUser};