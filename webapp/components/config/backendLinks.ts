// import getConfig from `next/config`;

const baseUrl = `https://us-central1-jatan-development.cloudfunctions.net/api`
// const baseUrl = `http://127.0.0.1:5001/jatan-development/us-central1/api`

export const helloWorld = `${baseUrl}`
// export const userlogin = `${baseUrl}auth/login`
export const createuser = `${baseUrl}/auth/createuser`
export const loginuser = `${baseUrl}/auth/loginuser`
export const providerauth = `${baseUrl}/auth/providerauth`
export const createdocproject = `${baseUrl}/dock/createdocproject`
export const getallprojectslist = `${baseUrl}/dock/getallprojectslist`
export const getoneproject = `${baseUrl}/dock/getoneproject`
export const deleteproject = `${baseUrl}/dock/deleteproject`
export const createsession = `${baseUrl}/session/createsession`
export const getallsession = `${baseUrl}/session/getallsessions`
