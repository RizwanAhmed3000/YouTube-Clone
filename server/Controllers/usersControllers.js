import { User } from "../models/UserSchema.js";


export const updateUser = async (req, res) => {
    if(req.params.id === req.user.id){
        try {
            const userToUpdate = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new : true }
            )
            const {password, ...other} = userToUpdate._doc;
            res.status(200).send({
                status: "Success",
                message: "Users updated",
                data: other
            })
        } catch (error) {
            res.status(400).send({
                status: "Fail",
                message: error.message
            })
        }

    } else {
        res.status(400).send({
            status: "Fail",
            message: "You can update only your Account"
        })
    }
};

export const deleteUser = async (req, res) => {
    if (req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).send({
                status: "Success",
                message: "Users deleted",
            })
        } catch (error) {
            res.status(400).send({
                status: "Fail",
                message: error.message
            })
        }

    } else {
        res.status(400).send({
            status: "Fail",
            message: "You can delete only your Account"
        })
    }
};

export const getUser = async (req, res) => {
    try {
        const getUserById = await User.findById(req.params.id);
        if(!getUserById){
            res.status(404).send({
                status: "fail",
                message: "Users not found",
            });
            return
        }
        const { password, ...other } = getUserById._doc;
        res.status(200).send({
            status: "Success",
            message: "Users found",
            data: other
        })
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
};

export const subscribeUser = async (req, res) => {

};

export const unsubscribeUser = async (req, res) => {

};

export const likeVideo = async (req, res) => {

};

export const dislikeVideo = async (req, res) => {

};

