import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
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

export const signin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(404).send({
                status: "Fail",
                message: "User not found"
            })
            return
        };

        const isCorrect = await bcryptjs.compare(req.body.password, user.password);
        if (!isCorrect) {
            res.status(400).send({
                status: "Fail",
                message: "Incorrect Password"
            });
            return
        };

        const token = jwt.sign({ id: user._id }, process.env.JWT);
        console.log(token, "===> access token from signin");
        const { password, ...other } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).send({
            status: "Success",
            message: "User sign in successfully",
            data: other
        });
    } catch (error) {
        res.status(400).send({
            status: "Fail",
            message: error.message
        })
    }

};

export const googleAuth = (req, res) => {

};