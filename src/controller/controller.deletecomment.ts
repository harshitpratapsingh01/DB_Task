import { Comments } from '../models/schema';

class Delete{
    static async delete_comment(req:any,res:any){
        try{
            const {id} = req.body;
            const data = await Comments.findByPk(id);
            if(!data){
                res.status(404).json({status: "Not Found"})
            }
            else{
                await data.destroy();
                res.status(200).json({status:"comment deleted successfully"});
            }
        }
        catch(err){
            res.status(502).json({status:"Bad Gateway"})
        }
    }
}
export {Delete};