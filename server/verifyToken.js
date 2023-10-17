import Jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    // console.log(token, "==> access token");
    if (!token) {
        res.status(401).send({
            status: "Fail",
            message: "You are not authorized"
        });
        return
    }
    Jwt.verify(token, process.env.JWT, (err, user) => {
        // console.log(user);
        if (err) {
            res.status(403).send({
                status: "Fail",
                message: "Invalid Token"
            });
            return
        };
        req.user = user;
        next();
    })
}