"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const AuthMiddleware = ({ req, res, next }) => {
    // verify token
    if (req.body.token === "123456789") {
        return next();
    }
    return res.json({ msg: "Token Invalid" });
};
exports.AuthMiddleware = AuthMiddleware;
