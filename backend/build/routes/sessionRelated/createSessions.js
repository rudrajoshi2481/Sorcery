"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sessionSchema_1 = __importDefault(require("../../scheme/sessionSchema"));
const router = express_1.default.Router();
router.post("/createsession", (req, res) => {
    console.log("Creating new sessions", req.body);
    const { sessionName, description, userId, projectId } = req.body;
    var sessionMetaData = [{
            sessionName,
            description,
            projectId: projectId,
            createdByDbId: userId,
            createdAt: Date.now(),
            proteins: [],
            ligands: [],
            documents: []
        }];
    sessionSchema_1.default.create(sessionMetaData).then((docs) => {
        console.log(docs);
        res.send({ status: 200, docs });
    }).catch(err => {
        console.log(err);
        res.send({ status: 400, msg: "Create Unique Session Name" });
    });
});
module.exports = router;
