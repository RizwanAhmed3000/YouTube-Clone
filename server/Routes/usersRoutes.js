import express from "express";
import { updateUser, deleteUser, getUser, subscribeUser, unsubscribeUser, likeVideo, dislikeVideo } from "../Controllers/usersControllers.js"
import { verifyToken } from "../verifyToken.js";

const usersRouter = express.Router();

// update User
// usersRouter.put('/:id', verifyToken , updateUser);
usersRouter.put('/:id', updateUser);

// Delete User
// usersRouter.delete('/:id', verifyToken, deleteUser);
usersRouter.delete('/:id', deleteUser);

// get a user
usersRouter.get('/find/:id', getUser);

// sub a user
// usersRouter.put('/sub/:id', verifyToken, subscribeUser);
usersRouter.put('/sub/:id', subscribeUser);

// unsub a user
// usersRouter.put('/unsub/:id', verifyToken, unsubscribeUser);
usersRouter.put('/unsub/:id', unsubscribeUser);

// like a video
// usersRouter.put('/like/:id', verifyToken, likeVideo);
usersRouter.put('/like/:id', likeVideo);

// dislike a video
// usersRouter.put('/dislike/:id', verifyToken, dislikeVideo);
usersRouter.put('/dislike/:id', dislikeVideo);


export default usersRouter;