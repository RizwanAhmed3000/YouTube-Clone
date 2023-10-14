import { query } from "express";
import { User } from "../models/UserSchema.js";
import { Video } from "../models/VideoSchema.js"

export const addVideo = async (req, res) => {
    const newVideo = new Video({ userId: req.user.id, ...req.body });
    try {
        const saveVideo = await newVideo.save();
        res.status(200).send({
            status: "Success",
            message: "Video Uploaded",
            data: saveVideo
        })
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
}
export const updateVideo = async (req, res) => {
    try {
        const videoToUpdate = await Video.findById(req.params.id);
        if (!videoToUpdate) {
            res.status(404).send({
                status: "Fail",
                message: "Video not found"
            });
            return;
        }
        if (req.user.id === videoToUpdate.userId) {
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true });
            res.status(200).send({
                status: "Success",
                message: "Video Updated",
                data: updatedVideo
            })
        } else {
            res.status(403).send({
                status: "Fail",
                message: "You can update only your video"
            });
        }
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }

}
export const deleteVideo = async (req, res) => {
    try {
        const videoToUpdate = await Video.findById(req.params.id);
        if (!videoToUpdate) {
            res.status(404).send({
                status: "Fail",
                message: "Video not found"
            });
            return;
        }
        if (req.user.id === videoToUpdate.userId) {
            await Video.findByIdAndDelete(req.params.id);
            res.status(200).send({
                status: "Success",
                message: "Video Deleted",
            })
        } else {
            res.status(403).send({
                status: "Fail",
                message: "You can delete only your video"
            });
        }
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
}
export const getVideo = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) {
            res.status(404).send({
                status: "Fail",
                message: "Video not found"
            });
            return;
        }
        res.status(200).send({
            status: "Success",
            message: "Video found",
            data: video
        });
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
}

export const addView = async (req, res) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } })
        res.status(200).send({
            status: "Success",
            message: "view added",
        });
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
}

export const getRandom = async (req, res) => {
    try {
        const randomVideos = await Video.aggregate([{ $sample: { size: 10 } }]);
        res.status(200).send({
            status: "Success",
            message: "Random videos",
            data: randomVideos
        });
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
}

export const getTrending = async (req, res) => {
    try {
        const trendingVideos = await Video.find().sort({ views: -1 });
        res.status(200).send({
            status: "Success",
            message: "trending Videos",
            data: trendingVideos
        });
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
}

export const sub = async (req, res) => {
    try {
        // console.log(req.params);
        
        const user = await User.findById(req.params.id);
        const subscribedChannels = user.subscribedUsers;

        const list = await Promise.all(
            subscribedChannels.map(async (channelId) => {
                return await Video.find({ userId: channelId });
            })
        );
        res.status(200).send({
            status: "Success",
            message: "All subscribed videos",
            data: list.flat().sort((a, b) => b.createdAt - a.createdAt)
        });
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
}

export const getByTags = async (req, res) => {
    const tags = req.query.tags.split(",")
    try {
        const videosByTags = await Video.find({ tags: { $in: tags } }).limit(10)
        res.status(200).send({
            status: "Success",
            message: "searched tags",
            data: videosByTags
        })
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
}

export const getBySearch = async (req, res) => {
    const search = req.query.s
    try {
        const videos = await Video.find({title: {$regex: search, $options: "i"}}).limit(40)
        res.status(200).send({
            status: "Success",
            message: "Searched videos",
            data: videos
        })
    } catch (error) {
        res.status(500).send({
            status: "Fail",
            message: error.message
        })
    }
}

