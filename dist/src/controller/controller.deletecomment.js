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
exports.Delete = void 0;
const schema_1 = require("../models/schema");
class Delete {
    static delete_comment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.body;
                const data = yield schema_1.Comments.findByPk(id);
                if (!data) {
                    res.status(404).json({ status: "Not Found" });
                }
                else {
                    yield data.destroy();
                    res.status(200).json({ status: "comment deleted successfully" });
                }
            }
            catch (err) {
                res.status(502).json({ status: "Bad Gateway" });
            }
        });
    }
}
exports.Delete = Delete;
//# sourceMappingURL=controller.deletecomment.js.map