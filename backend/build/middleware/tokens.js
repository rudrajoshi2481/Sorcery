"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJSONToken = exports.createJSONToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let secret = "5e1650276aee383bc7a86c532ef9328e82dfb61508a5ea262fd7f71cd4c99e1885daac4e090f3ed1229b393c1c097b1e";
const createJSONToken = (uuid) => {
    return jsonwebtoken_1.default.sign({
        data: uuid,
    }, secret, { expiresIn: "1h" });
};
exports.createJSONToken = createJSONToken;
const verifyJSONToken = (token) => {
    return jsonwebtoken_1.default.verify(token, secret, (err, decode) => {
        console.log("Decode");
        console.log(decode);
    });
};
exports.verifyJSONToken = verifyJSONToken;
