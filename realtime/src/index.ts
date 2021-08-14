



import { initButton } from "./components/button";
import { initHeader } from "./components/header";
import { initTextField } from "./components/input";
import "./pages/home/index";
import "./pages/chat/index";
import "./routes"
import { state } from "./state";



(function main(){
    state.init();
    initButton();
    initHeader();
    initTextField();

})()

