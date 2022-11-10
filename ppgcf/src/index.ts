import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


export const helloCallableWorld = functions.https.onCall((data, context) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  return "Hello from Firebase!";
});


export const sendSendingConfirmationInToChat =
 functions.https.onCall((data, context) => {
   const messageDB = admin.database().ref("messages");
   messageDB.push({
     "name": "chris",
     "text": "foo",
   });


   return;
 });
