import express from "express";
import { register, signin, googleAuth } from "../Controllers/authControllers.js";

const authRouter = express.Router();

// Register
authRouter.post('/signup', register);

// Login
authRouter.post('/signin', signin);

// Google auth
authRouter.post('/googleAuth', googleAuth);


export default authRouter;