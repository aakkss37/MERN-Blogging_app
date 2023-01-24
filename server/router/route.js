import express from "express";
import { signupUser, loginUser } from "../controller/controller.js";
import { uploadImage } from "../controller/imageController.js";
import upload from '../utils/upload.js';

const router = express.Router();
router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/upload/picture', upload.single('dispalyPicture'), uploadImage);

export default router;