import * as admin from "firebase-admin"
import * as serviceAccount from "./key.json"



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any),
    databaseURL:"https://real-time-d3.firebaseio.com"
});


const rtdb = admin.database();





export { rtdb}
