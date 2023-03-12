import { verifyJSONToken, verifyUserUuidDatabase } from "./tokens";

export const AuthMiddleware = async (req: any, res: any, next: any) => {
  // verify token
  // console.log("Something Happned in middleware");
  let tokenDecode:any = await verifyJSONToken(req.body.token);

  // console.log(tokenDecode.status,"this one");
  // console.log(tokenDecode.decode.data,"this one");
  
  if (tokenDecode.status === 400) {
      console.log("👿 fail token 01");
      return res.json({ msg: "Token Invalid" });
  }

  let uuid = await verifyUserUuidDatabase(tokenDecode.decode.data);


  // console.log(tokenDecode);
  // console.log();
  


  // console.log(await verifyJSONToken(req.body.token),"Token 01");
  


  // if (tokenDecode.status === 400) {
  //   res.send({status:400,msg:"invalid token"})
  // }

  if (tokenDecode.decode.data === uuid) {
    console.log("😀 Success token");
    return next();
  } else {
    console.log("👿 fail token");
    return res.json({ msg: "Token Invalid" });
  }
};
