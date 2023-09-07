import { User } from "../models/UserSchema.js";
import { Video } from "../models/VideoSchema.js";


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
    try {
        await User.findByIdAndUpdate(req.user.id, { $push: { subscribedUsers : req.params.id}});
        await User.findByIdAndUpdate(req.params.id, { $inc: {subscribers: 1}});
        res.status(200).send({
            status: "Success",
            message: "Subscribed User",
        })
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
};

export const unsubscribeUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.user.id, { $pull: { subscribedUsers: req.params.id } });
        await User.findByIdAndUpdate(req.params.id, { $inc: { subscribers: -1 } });
        res.status(200).send({
            status: "Success",
            message: "unsubscribed User",
        })
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
};

export const likeVideo = async (req, res) => {
    const id = req.user.id;
    const videoId = req.params.id;
    try {

        await Video.findByIdAndUpdate(videoId, {
            $addToSet: {likes: id},
            $pull:{dislikes: id}
        })

        res.status(200).send({
            status: "Success",
            message: "your like is added",
        })
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
};

export const dislikeVideo = async (req, res) => {
    const id = req.user.id;
    const videoId = req.params.id;
    try {

        await Video.findByIdAndUpdate(videoId, {
            $addToSet: { dislikes: id },
            $pull: { likes: id }
        })

        res.status(200).send({
            status: "Success",
            message: "your dislike is added",
        })
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
};

