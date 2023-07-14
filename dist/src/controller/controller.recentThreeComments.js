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
exports.recent_comments = void 0;
const schema_1 = require("../models/schema");
const recent_comments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let photo_id = 0;
        schema_1.Photos.findAll({
            order: [['id', 'DESC']]
        }).then((result) => {
            for (let i = 0; i < 3; i++) {
                console.log(`USER ID: ${result[i].user_id}`);
                console.log(`URL: ${result[i].url}`);
            }
        })
            .catch((error) => {
            // Handle error
        });
        res.status(200).json({ status: "success" });
    }
    catch (err) {
        res.status(500).json({ status: "Server Error" });
    }
});
exports.recent_comments = recent_comments;
//# sourceMappingURL=controller.recentThreeComments.js.map