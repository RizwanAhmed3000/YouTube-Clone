import express from "express";
import { verifyToken } from "../verifyToken.js";
import { addVideo, updateVideo, deleteVideo, getVideo, addView, getRandom, getTrending, sub, getByTags, getBySearch } from "../Controllers/videosControllers.js"

const videosRouter = express.Router();

// add video
// videosRouter.post('/', verifyToken, addVideo);
videosRouter.post('/', addVideo);

// update video
// videosRouter.put('/:id', verifyToken, updateVideo);
videosRouter.put('/:id', updateVideo);

// delete video
// videosRouter.delete('/:id', verifyToken, deleteVideo);
videosRouter.delete('/:id', deleteVideo);

// get a video
videosRouter.get('/find/:id', getVideo);

// add views
videosRouter.get('/view/:id', addView);

// get trending
videosRouter.get('/trend', getTrending);

// get random
videosRouter.get('/random', getRandom);

// add subs
// videosRouter.get('/subscriber', verifyToken, sub);
videosRouter.get('/subscriber/:id', sub);

// get by tags
videosRouter.get('/tags', getByTags);

// get by search
videosRouter.get('/search', getBySearch);


export default videosRouter;