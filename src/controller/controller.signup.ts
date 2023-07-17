import { User } from "../models/schema";
import jwt from 'jsonwebtoken';
import { Validate } from "../middleware/validate_user";

const SECRET_KEY = process.env.SECRET_KEY;
class UserSignup{
    static async signup(req: any, res: any){
        const details = req.body;
        // console.log(req.body);
        try{
            await Validate.validateUser.validateAsync(details);
            const isUser = await User.findOne({where: {username : details.username}});
            // console.log(isUser);
            if(!isUser){
                const user = await User.create(details);
                const token = jwt.sign({ Id: user.username },SECRET_KEY);
                res.status(200).json({status:"SignUp Success",token});
            }
            else{
                res.status(404).json({status: "Username Already Exist"});
            }
            // User.create(details);
            // res.status(200).json({status:"SignUp Success"});
        }
        catch(err){
            res.status(500).json({status:"Please Enter valid Username"});
        }
    }
}

export {UserSignup};