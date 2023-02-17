export const AuthMiddleware = ({req,res,next}:any) => {
    // verify token
    if (req.body.token === "123456789"){
        return next()
    }

    return res.json({msg:"Token Invalid"})

}