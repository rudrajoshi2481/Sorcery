"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const { AuthMiddleware } = require("./middleware/authmiddleware");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello my World,😘 !");
});
app.get("/dock", AuthMiddleware, require("./routes/docking"));
app.use("/auth", require("./routes/login"));
app.listen(6000, () => {
    console.log("App started on 6000");
});
