import { Photos } from "../models/schema";

const recent_comments = async(req:any,res:any) => {
    try{
        let photo_id: Number = 0;
        Photos.findAll({
            order: [['id', 'DESC']]
          }).then((result:any) => {
              for (let i = 0; i < 3; i++) {
                console.log(`USER ID: ${result[i].user_id}`);
                console.log(`URL: ${result[i].url}`);
              }
            })
            .catch((error:any) => {
                console.log(error);
            });
        res.status(200).json({status : "success"});
    }
    catch(err){
        res.status(500).json({status: "Server Error"});
    }
}

export {recent_comments};