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
router.post("/createdockingproject", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // get input and save it in database
    console.log("Something");
    const { title, description, share, userId } = req.body;
    const createdAt = Date.now();
    let data = new projectScheme_1.default({
        title,
        description,
        createdAt,
        share: share,
        lastOnline: createdAt,
        createdBy: userId,
    });
    data.save().then(doc => {
        res.send(doc);
    }).catch(err => {
        console.log("error", err);
        res.send(err);
    });
}));
router.post("/updatedockingproject", (req, res) => {
    // get input and save it in database
});
router.post("/deletedockingproject", (req, res) => {
    // get input and save it in database
});
module.exports = router;
