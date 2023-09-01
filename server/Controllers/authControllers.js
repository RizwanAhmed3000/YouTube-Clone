import mongoose from "mongoose";
import bcryptjs from "bcryptjs"
import { User } from "../models/UserSchema.js";

export const register = async (req, res, next) => {
    try {

        // hashing password

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(req.body.password, salt);

        // creating user

        const user = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword,
        });

        // saving user in DB

        const newUser = await user.save();
        res.status(200).send({
            status: 'success',
            message: 'User registered successfully',
            userInDB: newUser
        })

    } catch (error) {
        next(error)
    }
};

export const signin = (req, res) => {

};

export const googleAuth = (req, res) => {

};