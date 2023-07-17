import { Comments, Likes, Photos } from "../models/schema";
import { CommentValidate } from "../middleware/validate_user_comment_data";
class Comment{
    static async createComment(req:any, res:any){
        const details = req.body;
        console.log(details);
        const id = req.body.comment_id;
        const likes = req.params.like;
        try{
            if(likes != null){ 
                const update = await Likes.increment('totallikes', {where: {comment_id:id}});
                // console.log(update);
                res.status(200).json({status:"comment liked successfully"});
            }
            else{
                await CommentValidate.validate_comment.validateAsync(details);
                // const findUser = await Photos.findOne({where:{user_id : details.user_id}});
                const findPost = await Comments.findOne({where:{photo_id : details.photo_id}});
                if(findPost!=null){
                    await Comments.create(details);
                    res.status(200).json({status:"comment created successfully"});
                }
                else{
                    res.status(404).json({status:"Photo Not Found"});
                }
            }
        }
        catch(err){
            res.status(500).json({status : "Server Error"});
        }
    }
}

export {Comment};