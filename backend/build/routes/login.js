"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
Router.post("/login", (req, res) => {
    let isUserTrusted = false;
    const loginId = [
        {
            email: "bheem@gmail.com",
            password: "123456",
        },
        {
            email: "raju@gmail.com",
            password: "123456",
        },
    ];
    // generate token and send
    const token = "token@123456789";
    const { emailId, password } = req.body;
    loginId.forEach((element) => {
        if (element.email === emailId && element.password === password) {
            isUserTrusted = true;
            res.json({ token: token, msg: "done" });
        }
    });
    if (!isUserTrusted) {
        res.send("credientials incorrect");
    }
});
module.exports = Router;
