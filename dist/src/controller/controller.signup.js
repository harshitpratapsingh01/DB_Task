"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignup = void 0;
const schema_1 = require("../models/schema");
const validate_user_1 = require("../middleware/validate_user");
class UserSignup {
    static signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const details = req.body;
            // console.log(req.body);
            try {
                yield validate_user_1.Validate.validateUser.validateAsync(details);
                const isUser = yield schema_1.User.findOne({ where: { username: details.username } });
                // console.log(isUser);
                if (!isUser) {
                    yield schema_1.User.create(details);
                    res.status(200).json({ status: "SignUp Success" });
                }
                else {
                    res.status(404).json({ status: "Username Already Exist" });
                }
                // User.create(details);
                // res.status(200).json({status:"SignUp Success"});
            }
            catch (err) {
                res.status(500).json({ status: "Please Enter valid Username" });
            }
        });
    }
}
exports.UserSignup = UserSignup;
//# sourceMappingURL=controller.signup.js.map