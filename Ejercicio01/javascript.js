let buttom01 = document.querySelector('#button01');
let buttom02 = document.querySelector("#button02");
let buttom03 = document.querySelector("#button03");
let buttom04 = document.querySelector("#button04");

buttom01.addEventListener('click',()=>{
    let string = prompt("Ingrese una palabra");
    ejercicio1(string);
})

buttom02.addEventListener('click',()=>{
    let string = prompt("Ingrese una palabra");
    let subtr = prompt("Ingrese la cantidad");
    ejercicio2(string,subtr);

})

buttom03.addEventListener('click',()=>{
    let string = prompt("ingrese una palabra");
    let separador = prompt("Ingrese separador");
    separador = (separador) ? separador : ' ';
    ejercicio3(string,separador);
})

buttom04.addEventListener('click',()=>{
    let string = prompt("ingrese una palabra");
    let veces = prompt("Ingrese las veces que se va repetir:");
    ejercicio4(string,veces);
})

const ejercicio1 = (string="") =>{
    if(string){
        alert(`se ha encontrado ${string.length} caracteres.`);
    }else{
        alert(`no se ha ingresado valores`);
    }
}

const ejercicio2 =(string, subtr)=>{
    if(string != "" && subtr != "" && typeof subtr == `number` ){
        alert(`la nueva palabra es ${string.substr(0,subtr)}`);
    }else{
        alert(`no se ha ingresado valores`);
    }
}

const ejercicio3 = (string,separador)=>{
    let array = string.split(separador)
    console.log(array);
} 

const ejercicio4 = (string,veces) =>{
    string = string + ` `;
    alert(string.repeat(veces));
}
