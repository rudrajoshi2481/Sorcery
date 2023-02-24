export const saveToken = (doc:any) => {
    window.localStorage.setItem("UserData",JSON.stringify(doc))
    
    
}

export const getToken  =  () => {
    let userData:any = window.localStorage.getItem("UserData")
    return JSON.parse(userData)
}

export const logOut = () => {
    window.localStorage.removeItem("UserData")
    return true
}