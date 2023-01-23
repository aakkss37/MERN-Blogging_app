import express from "express";
import { signupUser, loginUser } from "../controller/controller.js";
import { uploadImage } from "../controller/imageController.js";



const router = express.Router();
router.post('/signup', signupUser);
router.post('/login', loginUser)

router.post('/upload/picture', uploadImage)

export default router;