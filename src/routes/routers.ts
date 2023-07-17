import express from "express";
import { UserSignup } from "../controller/controller.signup";
import { LoginUser } from "../controller/controller.login";
import { Post } from "../controller/controller.createpost";
import { Comment } from "../controller/controller.comment";
import { Delete } from "../controller/controller.deletecomment";
import { Like } from "../controller/controller.likes_per_comment";
import { RecentComments } from "../controller/controller.recentThreeComments";
const router = express.Router();


router.post("/signup", UserSignup.signup);
router.get("/login", LoginUser.login);
router.post("/createpost", Post.Post_photo);
router.post("/comment", Comment.createComment);
router.post("/delete", Delete.delete_comment);
router.post("/comment/:like",Comment.createComment);
router.get("/like",Like.likes_on_comments);
router.get("/recentComment",RecentComments.recentCommentsOnPhoto);

export default router;