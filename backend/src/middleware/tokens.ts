import jwt from "jsonwebtoken";


let secret = "5e1650276aee383bc7a86c532ef9328e82dfb61508a5ea262fd7f71cd4c99e1885daac4e090f3ed1229b393c1c097b1e"


export const createJSONToken = (uuid:any) => {
  return jwt.sign(
    {
      data: uuid,
    },
    secret,
    { expiresIn: "1h" }
  );
};


export const verifyJSONToken = (token:any) => {
    return jwt.verify(token,secret,(err:any,decode:any) => {
        console.log("Decode");
        console.log(decode);
        
        
    });
  };
  