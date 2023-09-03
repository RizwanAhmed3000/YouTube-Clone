import express from "express";
import { verifyToken } from "../verifyToken.js";
import { addVideo, updateVideo, deleteVideo, getVideo } from "../Controllers/videosControllers.js"

const videosRouter = express.Router();

// add video
videosRouter.post('/', verifyToken, addVideo);

// update video
videosRouter.put('/:id', verifyToken, updateVideo);

// delete video
videosRouter.delete('/:id', verifyToken, deleteVideo);

// get a video
videosRouter.get('/:id', getVideo);

// add views
videosRouter.get('/view/:id', addView);

// get trending
videosRouter.get('/trend', getTrending);

// get random
videosRouter.get('/random', getRandom);

// add subs
videosRouter.get('/sub', addSubs);


export default videosRouter;