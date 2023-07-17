import Sequelize from "sequelize";
import { sqlize } from "../core/connection";

const User = sqlize.define('users', {
    username: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        default: Date.now()
    },
    updatedAt: {
        type: Sequelize.DATE,
        default: Date.now()
    }
});

const Photos = sqlize.define('photos', {
    url: {
        type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE,
        default: Date.now()
    },
    updatedAt: {
        type: Sequelize.DATE,
        default: Date.now()
    }
});

const Comments = sqlize.define('comments', {
    contents: {
        type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    photo_id: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE,
        default: Date.now()
    },
    updatedAt: {
        type: Sequelize.DATE,
        default: Date.now()
    }
});

const Likes = sqlize.define('likes', {
    comment_id: {
        type: Sequelize.INTEGER
    },
    totallikes: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE,
        default: Date.now()
    },
    updatedAt: {
        type: Sequelize.DATE,
        default: Date.now()
    }
});

export { User, Photos, Comments, Likes };