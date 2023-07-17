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
exports.RecentComments = void 0;
const schema_1 = require("../models/schema");
class RecentComments {
    static recentCommentsOnPhoto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const details = req.body;
                const findID = yield schema_1.Comments.findOne({ where: { photo_id: details.photo_id } });
                // console.log(findID);
                if (findID != null) {
                    schema_1.Comments.findAll({
                        where: { photo_id: details.photo_id },
                        order: [['id', 'DESC']]
                    })
                        .then((result) => {
                        const recentComments = [];
                        for (let i = 0; i < 3; i++) {
                            recentComments.push(result[i].contents);
                        }
                        console.log(recentComments);
                        // res.json({recentComments});
                    })
                        .catch((error) => {
                        console.log(error);
                    });
                    res.status(200).json({ status: "success" });
                }
                else {
                    res.status(404).json({ status: "Photo not found" });
                }
            }
            catch (err) {
                res.status(500).json({ status: "Server Error" });
            }
        });
    }
}
exports.RecentComments = RecentComments;
//# sourceMappingURL=controller.recentThreeComments.js.map