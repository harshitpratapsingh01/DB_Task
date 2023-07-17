import { Photos } from "../models/schema";
import { ValidatePost } from "../middleware/validate_photo_data";
class Post{
    static async Post_photo(req:any,res:any){
        const details = req.body;
        try{
            await ValidatePost.post_validation.validateAsync(details);
            await Photos.create(details);
            res.status(200).json({status:"Post created Successfully"});
        }
        catch(err){
            res.status(404).json({status:"Enter Valid Details"});
        }
    }
}

export {Post};