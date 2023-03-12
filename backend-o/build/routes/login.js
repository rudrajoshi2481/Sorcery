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
const tokens_1 = require("../middleware/tokens");
const UserSchema_1 = __importDefault(require("../scheme/UserSchema"));
// const uuid = require("uuid")
const uuid_1 = require("uuid");
const Router = express_1.default.Router();
// Router.post("/login", (req, res) => {
//   let isUserTrusted = false;
//   const loginId = [
//     {
//       email: "bheem@gmail.com",
//       password: "123456",
//     },
//     {
//       email: "raju@gmail.com",
//       password: "123456",
//     },
//   ];
//   // generate token and send
//   const token = "token@123456789";
//   const { emailId, password } = req.body;
//   loginId.forEach((element) => {
//     console.log(element);
//     if (element.email === emailId && element.password === password) {
//       isUserTrusted = true;
//       res.json({ token: token, msg: "done" });
//     }
//   });
//   if (!isUserTrusted) {
//     res.send("credientials incorrect");
//   }
// });
Router.post("/createuser", (req, res) => {
    console.log("Something happned", req.body);
    const { email, password } = req.body;
    const data = new UserSchema_1.default({ email, password, uuid: (0, uuid_1.v4)() });
    data
        .save()
        .then((doc) => __awaiter(void 0, void 0, void 0, function* () {
        let token = yield (0, tokens_1.createJSONToken)(doc.uuid);
        res.send({ status: 200, email: doc.email, uuid: doc.uuid, token });
    }))
        .catch((err) => {
        console.log(err);
        res.send({ status: 400, err });
    });
});
Router.post("/loginuser", (req, res) => {
    const { email, password } = req.body;
    // create token function for login user
    const loginMain = (doc) => {
        if (doc.email === email && doc.password === password) {
            return (0, tokens_1.createJSONToken)(doc.uuid);
        }
    };
    // find the user based on password and email
    UserSchema_1.default.findOne({
        email: email,
        password: password
    }).then((doc) => __awaiter(void 0, void 0, void 0, function* () {
        if (!doc) {
            console.log("not valid email  ");
            return res.send({ status: 400, msg: "invalid token" });
        }
        console.log("find one ");
        console.log(doc);
        let token = yield loginMain(doc);
        res.send({ status: 200, token, email: doc === null || doc === void 0 ? void 0 : doc.email, uuid: doc.uuid });
    }));
});
module.exports = Router;
