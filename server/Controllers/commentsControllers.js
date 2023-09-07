import { Comment } from "../models/CommentSchema.js";
import { Video } from "../models/VideoSchema.js";

export const addComment = async (req, res) => {
    const newComment = new Comment({...req.body, userId: req.user.id});
    try {
        const saveComment = await newComment.save();
        res.status(200).send({
            status: "Success",
            message: "Comment added",
            data: saveComment
        })
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
}

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({videoId: req.params.videoId})
        res.status(200).send({
            status: "Success",
            message: "Comments",
            data: comments
        })
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
}

export const deleteComment = async (req, res) => {
    try {
        const getComment = await Comment.findById(req.params.id);
        const getVideo = await Video.findById(getComment.videoId);
        if(req.user.id === getComment.userId || req.user.id === getVideo.userId){
            await Comment.findByIdAndDelete(req.params.id);
            res.status(200).send({
                status: "Success",
                message: "Comment deleted",
            })
        } else {
            res.status(403).send({
                status: "Fail",
                message: "You can deete only your comment",
            })
        }
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
}