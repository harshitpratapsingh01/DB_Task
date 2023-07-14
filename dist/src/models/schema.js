"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Likes = exports.Comments = exports.Photos = exports.User = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const connection_1 = require("../core/connection");
const User = connection_1.sqlize.define('users', {
    username: {
        type: sequelize_1.default.STRING
    },
    createdAt: {
        type: sequelize_1.default.DATE,
        default: Date.now()
    },
    updatedAt: {
        type: sequelize_1.default.DATE,
        default: Date.now()
    }
});
exports.User = User;
const Photos = connection_1.sqlize.define('photos', {
    url: {
        type: sequelize_1.default.STRING
    },
    user_id: {
        type: sequelize_1.default.INTEGER
    },
    createdAt: {
        type: sequelize_1.default.DATE,
        default: Date.now()
    },
    updatedAt: {
        type: sequelize_1.default.DATE,
        default: Date.now()
    }
});
exports.Photos = Photos;
const Comments = connection_1.sqlize.define('comments', {
    contents: {
        type: sequelize_1.default.STRING
    },
    user_id: {
        type: sequelize_1.default.INTEGER
    },
    photo_id: {
        type: sequelize_1.default.INTEGER
    },
    createdAt: {
        type: sequelize_1.default.DATE,
        default: Date.now()
    },
    updatedAt: {
        type: sequelize_1.default.DATE,
        default: Date.now()
    }
});
exports.Comments = Comments;
const Likes = connection_1.sqlize.define('likes', {
    comment_id: {
        type: sequelize_1.default.INTEGER
    },
    totallikes: {
        type: sequelize_1.default.INTEGER
    },
    createdAt: {
        type: sequelize_1.default.DATE,
        default: Date.now()
    },
    updatedAt: {
        type: sequelize_1.default.DATE,
        default: Date.now()
    }
});
exports.Likes = Likes;
//# sourceMappingURL=schema.js.map