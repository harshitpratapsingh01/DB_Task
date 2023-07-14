import { Comments, Likes } from "../models/schema";
import express from 'express';

const likes_on_comments = async (req: any, res: any) => {
    try {
        let comment_id: Number = 0;
        await Comments.findAll()
            .then((result: any) => {
                result.forEach((record: any) => {
                    comment_id = record.id;
                    const printlike = async (comment_id: any) => {
                        const likedata = await Likes.findOne({ where: { comment_id: comment_id } });
                        if (likedata == null) {
                            console.log(`Likes:=${0}`);
                        }
                        else {
                            console.log(`Likes:=${likedata.dataValues.totallikes}`);
                        }
                    }
                    printlike(comment_id);
                });
            })
            .catch((error: any) => {
                console.log(error);
            });
        res.status(200).json({status: "success"});
    }
    catch (err) {
        res.status(400).json({status:"Bad Request"})
    }
}

export {likes_on_comments}