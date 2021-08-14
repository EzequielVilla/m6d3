import * as express from "express"
import { rtdb } from "./rtdb";
import {json} from "body-parser";
import * as cors from "cors";

//configuracion del servidor.
const port = 3000;
const app = express();
app.use(json());
app.use(cors());

app.post("/mensajes", function(req,res){
    const mensajeRef = rtdb.ref("/chatrooms/mensajes");
    mensajeRef.push(req.body, function(){
        res.json('listo');
    });
});
// app.get("/mensajes", function(req,res){
//     const mensajesRef = rtdb.ref("chatrooms/mensajes");
//     mensajesRef.once("value", (snap)=>{
//         const contenido = snap.val();
//         res.json(contenido);
//     })    
// })


app.listen(port,()=>{
    console.log(`escuchando en ${port}` );
});