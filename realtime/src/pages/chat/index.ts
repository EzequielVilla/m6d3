import { state } from "../../state";
import map from "lodash/map"

type Mensaje ={
    nombre:string;
    mensaje:string;
}
class initChat extends HTMLElement {
    mensaje: Mensaje[] = [];
    connectedCallback(){
        
        // this.verCambios();
        state.subscribe(()=>{  
            const estadoActual = state.getState();
            this.mensaje = estadoActual.mensaje;
        });
        this.render();
    }
    escribirMensaje(){
        this.querySelector(".boton").addEventListener("click", ()=>{
            const mensaje = document.querySelector(".text").shadowRoot.querySelector('input').value;
            state.setMensaje(mensaje);            
            
            // state.getMensajes().then((data)=>{         
            //     this.mensaje = data;
            //     this.render();   
            // });                          
        });    
    }
    // verCambios(){
    //     state.getMensajes().then((data)=>{
    //         this.mensaje = data;           
    //         this.render();
    //     });
    // }
    render(){  
        this.innerHTML=`
        <header-comp></header-comp>
        <h1>Chat</h1>
        <div class="chat-cont">
        ${ 
            this.mensaje.map((m)=>{ 
                return `<div>${m.nombre}:${m.mensaje}</div>`
            }).join("")}
        </div>
        <div class="input">
            <textfield-comp class="text" label=""></textfield-comp>
        </div>
        <div class="boton">
            <button-comp >Enviar</button-comp>
        </div>
    `
    this.escribirMensaje();    
    }
   
}
customElements.define("chat-page", initChat);

