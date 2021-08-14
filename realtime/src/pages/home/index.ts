import { state } from "../../state";
import { Router } from "@vaadin/router";


class Home extends HTMLElement{

    connectedCallback(){
        this.render();        
        document.querySelector(".boton").addEventListener("click", (e)=>{
            e.preventDefault();
            
            const nombre =  document.querySelector(".text").shadowRoot.querySelector('input').value;       
            state.setNombre(nombre);
            Router.go("/chat");
        });
    }
    render(){
        this.innerHTML=`
        <header-comp></header-comp>
        <h1>Bienvenidx</h1>
        <div class="input">
            <textfield-comp class="text" label="Tu nombre"></textfield-comp>
        </div>
        <div class="boton">
            <button-comp >Comenzar</button-comp>
        </div>
        `
    }
}
customElements.define("home-page", Home);
