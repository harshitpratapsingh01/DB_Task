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
exports.Like = void 0;
const schema_1 = require("../models/schema");
class Like {
    static likes_on_comments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let comment_id = 0;
                yield schema_1.Comments.findAll()
                    .then((result) => {
                    result.forEach((record) => {
                        comment_id = record.id;
                        const printlike = (comment_id) => __awaiter(this, void 0, void 0, function* () {
                            const likedata = yield schema_1.Likes.findOne({ where: { comment_id: comment_id } });
                            if (likedata == null) {
                                console.log(`Likes:=${0}`);
                            }
                            else {
                                console.log(`Likes:=${likedata.dataValues.totallikes}`);
                            }
                        });
                        printlike(comment_id);
                    });
                })
                    .catch((error) => {
                    console.log(error);
                });
                res.status(200).json({ status: "success" });
            }
            catch (err) {
                res.status(400).json({ status: "Bad Request" });
            }
        });
    }
}
exports.Like = Like;
//# sourceMappingURL=controller.likes_per_comment.js.map