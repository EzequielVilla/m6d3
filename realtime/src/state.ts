import {rtdb} from "./rtdb"
import map from "lodash/map";

const API_BASE_URL =  "http://localhost:3000"

const state = {
    data: {
        nombre:"",
        mensaje: [],
    },
    listeners:[],

    subscribe(callback:(any) =>any){
        this.listeners.push(callback);
    },
    getState(){
        return this.data;
    },
    setState(newState){
        this.data = newState;
        for(const cb of this.listeners){            
            cb();
        }     
        console.log('cambie:', this.data);
    },

    setNombre(nombre:string){
        const estadoActual = this.getState();
        estadoActual.nombre = nombre;
        this.setState(estadoActual);
    },
    setMensaje(mensaje){        
        const estadoActual = this.getState();       
        estadoActual.mensaje = mensaje;        
        this.setState(estadoActual);
        fetch(API_BASE_URL+"/mensajes",{
            method:"post",
            headers: {
                "content-type":"application/json",
            },
            body: JSON.stringify({
                nombre: this.getState().nombre,
                mensaje: this.getState().mensaje,
            })
        });
    },
    init(){
        console.log(rtdb.ref());
        
        // const referencia = rtdb.ref("/chatrooms/mensajes");
        // const stateActual = this.getState();
        // referencia.on("value",(snap)=>{
        //     const mensajesGuardados = snap.val();
        //     stateActual.mensaje = mensajesGuardados.mensaje;
        //     this.setState(stateActual);    
        // })
    },
    getMensajes(){
        return fetch(API_BASE_URL+"/mensajes",{
            method:"get",
        }).then((res)=>{
            return res.json().then((data)=>{   
                return map(data)
            });      
        });   
    }
}


export{state};