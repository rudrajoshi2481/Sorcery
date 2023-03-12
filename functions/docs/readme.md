 // "npm --prefix \"$RESOURCE_DIR\" run lint",


 removed from predeploy


 // "lint": "eslint --ext .js,.ts .", form package json



 import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
