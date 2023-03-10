"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const { AuthMiddleware } = require("./middleware/authmiddleware");
mongoose_1.default
    .connect("mongodb://localhost:9000/sorcery")
    .then((res) => {
    console.log("Connected to database");
})
    .catch((Err) => {
    console.log("Error Connecting to database");
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.get("/", (req, res) => {
    // console.log("Hello world");
    res.send("Hello my World,😘 !").status(200);
});
app.use("/dock", AuthMiddleware, require("./routes/docking"));
app.use("/auth", require("./routes/login"));
app.use("/session", require("./routes/sessionRelated/createSessions"));
app.listen(2000, () => {
    console.log("App started on 2000");
});
