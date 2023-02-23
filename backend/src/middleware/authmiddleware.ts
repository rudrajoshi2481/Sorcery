export const AuthMiddleware = (req:any,res:any,next:any) => {
    // verify token
    console.log("Something Happned in middleware");
    
    if (req.body.token === "123456789"){
        console.log("😀 Success token");
        return next()
    }
    
    console.log("👿 fail token");
    return res.json({msg:"Token Invalid"})

    
}