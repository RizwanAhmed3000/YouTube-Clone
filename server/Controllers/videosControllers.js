import { Video } from "../models/VideoSchema.js"

export const addVideo = async(req, res) =>{
    const newVideo = new Video({userId: req.user.id, ...req.body});
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
export const updateVideo = async(req, res) =>{
    try {
        const videoToUpdate = await Video.findById(req.params.id);
        if(!videoToUpdate){
            res.status(404).send({
                status: "Fail",
                message: "Video not found"
            });
            return;
        }
        if(req.user.id === videoToUpdate.userId){
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {$set: req.body,}, { new : true});
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
export const deleteVideo = async(req, res) =>{
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
export const getVideo = async(req, res) =>{
    try {
        const video = await Video.findById(req.params.id)
        if(!video){
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