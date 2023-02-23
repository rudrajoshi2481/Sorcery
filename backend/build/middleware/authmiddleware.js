"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const AuthMiddleware = (req, res, next) => {
    // verify token
    console.log("Something Happned in middleware");
    if (req.body.token === "123456789") {
        console.log("😀 Success token");
        return next();
    }
    console.log("👿 fail token");
    return res.json({ msg: "Token Invalid" });
};
exports.AuthMiddleware = AuthMiddleware;
