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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const tokens_1 = require("./tokens");
const AuthMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // verify token
    console.log("Something Happned in middleware");
    let tokenDecode = yield (0, tokens_1.verifyJSONToken)(req.body.token);
    console.log(tokenDecode.status, "this one");
    console.log(tokenDecode.decode.data, "this one");
    if (tokenDecode.status === 400) {
        console.log("👿 fail token 01");
        return res.json({ msg: "Token Invalid" });
    }
    let uuid = yield (0, tokens_1.verifyUserUuidDatabase)(tokenDecode.decode.data);
    // console.log(tokenDecode);
    // console.log();
    // console.log(await verifyJSONToken(req.body.token),"Token 01");
    // if (tokenDecode.status === 400) {
    //   res.send({status:400,msg:"invalid token"})
    // }
    if (tokenDecode.decode.data === uuid) {
        console.log("😀 Success token");
        return next();
    }
    else {
        console.log("👿 fail token");
        return res.json({ msg: "Token Invalid" });
    }
});
exports.AuthMiddleware = AuthMiddleware;
