"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sessionSchema_1 = __importDefault(require("../../scheme/sessionSchema"));
const Router = express_1.default.Router();
Router.post("/getallsessions", (req, res) => {
    const { projectId } = req.body;
    sessionSchema_1.default.find({
        projectId: projectId
    }, (err, docs) => {
        if (err) {
            console.log(`Error: ` + err);
            res.send({ status: 400, msg: "Faced Error" });
        }
        else {
            if (docs.length === 0) {
                console.log("message");
                res.send({ status: 400, msg: "No Session found" });
            }
            else {
                res.send({ status: 200, docs });
            }
        }
    });
});
module.exports = Router;
