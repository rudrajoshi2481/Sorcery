"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const { AuthMiddleware } = require("./middleware/authmiddleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.get("/", (req, res) => {
    // console.log("Hello world");
    res.send("Hello my World,😘 !").status(200);
});
app.get("/dock", AuthMiddleware, require("./routes/docking"));
app.use("/auth", require("./routes/login"));
app.listen(2000, () => {
    console.log("App started on 2000");
});
