import { Photos } from "../models/schema";
import express from 'express';

const Post_photo = async(req:any,res:any) => {
    const details = req.body;
    try{
        await Photos.create(details);
        res.status(200).json({status:"Post created Successfully"});
    }
    catch(err){
        res.status(500).json({status:"Server Error"});
    }
}

export {Post_photo};