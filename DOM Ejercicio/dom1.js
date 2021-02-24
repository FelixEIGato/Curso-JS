
import {moveBall,shortcuts} from "./teclado.js"; 
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import searchFilters from "./filtro_busqueda.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";
import speechReader from "./narrador.js";

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
            sound.src = "alarma.mp3";
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
    timer("#activar-reloj","#desactivar-reloj","#activar-alarma","#desactivar-alarma");

    countdown("countdown","August 25, 2021","Feliz Cumpleaños");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        '<a href="https://youtu.be/E0eM349w4SA" target="_blank rel="noopener">Ver Video</a>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/E0eM349w4SA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        );
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        '<a href="https://g.page/MuseoLarco?share" target="_blank rel="noopener">Ver Mapa</a>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31214.272752903737!2d-77.06932664900556!3d-12.058371086329183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c91a5000653d%3A0x1654d5501a2ea1e9!2sMuseo%20Larco!5e0!3m2!1ses!2spe!4v1613683622724!5m2!1ses!2spe" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        );

    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    searchFilters(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
})

document.addEventListener("keydown", e=>{
    shortcuts(e);
    moveBall(e,".stage",".ball");
})

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
speechReader();


