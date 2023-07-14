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
exports.Post_photo = void 0;
const schema_1 = require("../models/schema");
const Post_photo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const details = req.body;
    try {
        yield schema_1.Photos.create(details);
        res.status(200).json({ status: "Post created Successfully" });
    }
    catch (err) {
        res.status(500).json({ status: "Server Error" });
    }
});
exports.Post_photo = Post_photo;
//# sourceMappingURL=controller.createpost.js.map