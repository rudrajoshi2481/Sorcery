export const saveToken = (token:any) => {
    window.localStorage.setItem("token",token)
    
    
}

export const getToken  =  () => {
    let token = window.localStorage.getItem("token")
    return token
}

export const logOut = () => {
    window.localStorage.removeItem("token")
    return true
}