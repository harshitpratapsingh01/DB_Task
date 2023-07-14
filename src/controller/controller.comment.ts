import express from "express";
import { Comments, Likes } from "../models/schema";

const createComment = async(req:any, res:any) => {
    const details = req.body;
    console.log(details);
    const id = req.body.comment_id;
    const likes = req.params.like;
    try{
        if(likes != null){ 
            const update = await Likes.increment('totallikes', {where: {comment_id:id}});
            console.log(update);
            res.status(200).json({status:"comment liked successfully"});
        }
        // else if(likes == false){
        //     res.status(200).json({status:"comment not liked"});
        // }
        else{
            await Comments.create(details);
            res.status(200).json({status:"comment created successfully"});
        }
    }
    catch(err){
        res.status(500).json({status : "Server Error"});
    }
}

export {createComment};