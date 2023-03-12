import * as jwt from "jsonwebtoken";
import UserSchema from "../scheme/UserSchema";

let secret =
  "5e1650276aee383bc7a86c532ef9328e82dfb61508a5ea262fd7f71cd4c99e1885daac4e090f3ed1229b393c1c097b1e";

export const createJSONToken = (uuid: any) => {
  return jwt.sign(
    {
      data: uuid,
    },
    secret,
    { expiresIn: "5h" }
  );
};

export const verifyJSONToken = (token: any) => {
  return jwt.verify(token, secret, (err: any, decode: any) => {
    if (err) return {status:400,decode};
    return {status:200,decode};
  });
};

export const verifyUserUuidDatabase = (uuid: any): any => {
  return UserSchema.findOne({
    uuid: uuid,
  }).then((doc) => {
    if (!doc) {
      return false;
    } else {
      // console.log(doc, "MOGOD Doc");

      return doc.uuid;
    }
  });
};
