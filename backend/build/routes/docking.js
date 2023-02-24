"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectScheme_1 = __importDefault(require("../scheme/projectScheme"));
const router = express_1.default.Router();
router.post("/createdocproject", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // get input and save it in database
    // console.log("Started Creating Docking Project");
    const { body, title, description, share, uuid } = req.body;
    const createdAt = Date.now();
    let data = new projectScheme_1.default({
        title,
        description,
        createdAt,
        share: share,
        body: body,
        lastOnline: createdAt,
        createdBy: uuid,
    });
    data
        .save()
        .then((doc) => {
        // console.log(doc);
        res.send({ msg: "created project", doc, status: 200 });
    })
        .catch((err) => {
        // console.log("error", err);
        res.send({ msg: "faced an error ", status: 400 });
    });
}));
router.post("/getoneproject", (req, res) => {
    // console.log("Called Fectched one Project");
    const { projectId } = req.body;
    projectScheme_1.default.findOne({
        _id: projectId
    }).then((doc) => {
        if (!doc) {
            // console.log("message")
            res.send({ status: "400", msg: "Project Not Found" });
        }
        else {
            // console.log(doc)
            res.send({ status: "200", doc, msg: "Project found" });
        }
    }).catch((err) => {
        res.send({ status: "400", err, msg: "Project Not found" });
    });
});
router.post("/getallprojectslist", (req, res) => {
    // console.log("Started fetching data");
    const { uuid } = req.body;
    projectScheme_1.default.find({
        createdBy: uuid
    }, (err, docs) => {
        if (err) {
            //  console.log(`Error: ` + err)
            res.send({ status: "400", msg: "no projects found" });
        }
        else {
            // console.log(docs,"Projects fetched");
            if (docs.length === 0) {
                //  console.log("message")
                res.send({ status: "400", msg: "no projects created" });
            }
            else {
                // console.log(docs,"opo");
                let data = [];
                docs.forEach((element) => {
                    const { _id, title, description, createdAt, createdBy, lastOnline, share } = element;
                    data.push({ _id, title, description, createdAt, createdBy, lastOnline, share });
                });
                res.send({ status: "200", msg: "fetched all projects", docs: data });
            }
        }
    });
    // console.log("Started fetching over");
});
router.post("/updatedockingproject", (req, res) => {
    // get input and save it in database
});
router.post("/deleteproject", (req, res) => {
    // get input and save it in database
    console.log("Started deleting project");
    console.log(req.body);
    const { projectId } = req.body;
    projectScheme_1.default.deleteOne({
        _id: projectId
    }, (err) => {
        console.log(`Error: ` + err);
        if (err) {
            return res.send({ status: "400", msg: "Got errors" });
        }
        return res.send({ status: "200", msg: "deleted projects" });
    });
});
module.exports = router;
