
import {moveBall,shortcuts} from "./teclado.js"; 
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import tema_oscuro from "./tema_oscuro.js";
import darkTheme from "./tema_oscuro.js";

const d = document;

function hamburgesa(panelBtn,panel,menu){
    document.addEventListener("click",(e)=>{
        if(e.target.matches(`${panelBtn} *`) || (e.target.matches(panelBtn))){
            document.querySelector(panel).classList.toggle("is-active");
            document.querySelector(panelBtn).classList.toggle("is-active");
        }
        if(e.target.matches(menu)){
            document.querySelector(panel).classList.remove("is-active");
            document.querySelector(panelBtn).classList.remove("is-active");
        }
    })
}

function timer(inicio,parar,alarmaStart,alarmaStop){
    let reloj = null, sound = null;
    const $reloj = document.querySelector("#reloj");

    document.addEventListener("click",(e)=>{
        if(e.target.matches(inicio)){
            reloj = setInterval(()=>{
                let date = new Date();
                $reloj.innerHTML=date.toLocaleTimeString();
            },1000);
            document.querySelector(inicio).disabled = true;
        }
        
        if(e.target.matches(parar)){
            clearTimeout(reloj);
            $reloj.textContent="";
            document.querySelector(inicio).disabled = false;
        }

        if(e.target.matches(alarmaStart)){
            sound = new Audio();
            sound.src = "Mevengo.mp3";
            sound.play();
            document.querySelector(alarmaStart).disabled = true;
        }

        if(e.target.matches(alarmaStop)){
            sound.pause();
            document.querySelector(alarmaStart).disabled = false;
        }

    })
}

document.addEventListener("DOMContentLoaded",(e)=>{

    hamburgesa(".panel-btn",".panel",".panel a");
    timer("#iniciarReloj","#detenerReloj","#iniciarAlarma","#detenerAlarma");

    countdown("countdown","August 25, 2021","Feliz Cumpleaños");
    scrollTopButton(".scroll-top-btn");
    darkTheme(".dark-theme-btn","dark-mode");
})

document.addEventListener("keydown", e=>{
    shortcuts(e);
    moveBall(e,".stage",".ball");
})


