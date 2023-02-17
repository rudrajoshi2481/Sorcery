"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
Router.post("/login", (req, res) => {
    console.log("login Request provoked");
    // generate token and send
    const token = "123456789";
});
module.exports = Router;
