import express from "express";
import { signupUser, loginUser } from "../controller/controller.js";
import { uploadImage, getImage } from "../controller/imageController.js";
import { createPost, getAllPosts } from "../controller/postController.js";
import upload from '../utils/upload.js';
import { authanticateToken } from "../controller/jwt-controller.js";

const router = express.Router();
router.post('/signup', signupUser);
router.post('/login', loginUser);


router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/create', authanticateToken, createPost)
router.get('/posts', authanticateToken, getAllPosts)

export default router;