import express from "express";
import { addComment, getComments, deleteComment } from "../Controllers/commentsControllers.js";
import { verifyToken } from "../verifyToken.js"


const commentsRouter = express.Router();

// add comment
commentsRouter.post('/', verifyToken, addComment);

// update comment
commentsRouter.get('/:videoId', verifyToken, getComments);

// delete comment
commentsRouter.delete('/:id', verifyToken, deleteComment);

export default commentsRouter;