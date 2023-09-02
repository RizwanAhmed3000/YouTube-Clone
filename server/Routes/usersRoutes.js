import express from "express";
import { updateUser, deleteUser, getUser, subscribeUser, unsubscribeUser, likeVideo, dislikeVideo } from "../Controllers/usersControllers.js"
import { verifyToken } from "../verifyToken.js";

const usersRouter = express.Router();

// update User
usersRouter.put('/:id', verifyToken , updateUser);

// Delete User
usersRouter.delete('/:id', verifyToken, deleteUser);

// get a user
usersRouter.get('/find/:id', getUser);

// sub a user
usersRouter.put('/sub/:channelId', verifyToken , subscribeUser);

// unsub a user
usersRouter.put('/unsub/:channelId', verifyToken , unsubscribeUser);

// like a video
usersRouter.put('/like/:videoId', verifyToken , likeVideo);

// dislike a video
usersRouter.put('/dislike/:videoId', verifyToken , dislikeVideo);


export default usersRouter;