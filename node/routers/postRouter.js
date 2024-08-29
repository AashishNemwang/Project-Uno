import express from "express";
import { deleteUser, getSingleUser, getUser, post, updateUser } from "../controller/post.js";



const router = express.Router();

router.post("/post", post);
router.get("/getuser", getUser);
router.put("/update/:id", updateUser);
router.put("/delete/:id", deleteUser);
router.get("/getsingleuser/:id", getSingleUser);



export default router;
