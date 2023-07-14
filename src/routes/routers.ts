import express from "express";
import { user_SignUp } from "../controller/controller.signup";
import { loginUser } from "../controller/controller.login";
import { Post_photo } from "../controller/controller.createpost";
import { createComment } from "../controller/controller.comment";
import { delete_comment } from "../controller/controller.deletecomment";
import { likes_on_comments } from "../controller/controller.likes_per_comment";
import { recent_comments } from "../controller/controller.recentThreeComments";
const router = express.Router();

router.get("/");
router.post("/signup", user_SignUp);
router.post("/login", loginUser);
router.post("/post", Post_photo);
router.post("/comment", createComment);
router.post("/delete", delete_comment);
router.post("/comment/:like",createComment);
router.get("/list",likes_on_comments);
router.get("/recentComment",recent_comments);

export default router;