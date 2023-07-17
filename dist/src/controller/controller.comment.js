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
exports.Comment = void 0;
const schema_1 = require("../models/schema");
const validate_user_comment_data_1 = require("../middleware/validate_user_comment_data");
class Comment {
    static createComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const details = req.body;
            console.log(details);
            const id = req.body.comment_id;
            const likes = req.params.like;
            try {
                if (likes != null) {
                    const update = yield schema_1.Likes.increment('totallikes', { where: { comment_id: id } });
                    // console.log(update);
                    res.status(200).json({ status: "comment liked successfully" });
                }
                else {
                    yield validate_user_comment_data_1.CommentValidate.validate_comment.validateAsync(details);
                    // const findUser = await Photos.findOne({where:{user_id : details.user_id}});
                    const findPost = yield schema_1.Comments.findOne({ where: { photo_id: details.photo_id } });
                    if (findPost != null) {
                        yield schema_1.Comments.create(details);
                        res.status(200).json({ status: "comment created successfully" });
                    }
                    else {
                        res.status(404).json({ status: "Photo Not Found" });
                    }
                }
            }
            catch (err) {
                res.status(500).json({ status: "Server Error" });
            }
        });
    }
}
exports.Comment = Comment;
//# sourceMappingURL=controller.comment.js.map