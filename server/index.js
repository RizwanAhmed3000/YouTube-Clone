import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRouter from './Routes/authRoutes.js';
import usersRouter from './Routes/usersRoutes.js';
import videosRouter from './Routes/videosRoutes.js';
import commentsRouter from './Routes/commentsRoutes.js';
import cors from "cors";

const app = express();
const PORT = 8800;

dotenv.config();

const connect = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log(`connected to DB`);
        })
        .catch((err) => {
            throw err;
        });
};

// Middleware
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(cookieParser());
app.use(express.json());

// auth
app.use('/auth', authRouter)

// users
app.use('/user', usersRouter)

// videos
app.use('/videos', videosRouter)

// comments
app.use('/comment', commentsRouter)

// Error handling
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).send({
        success: false,
        status,
        message
    })
})

app.listen(PORT, () => {
    console.log("listening to the server");
    connect();
})