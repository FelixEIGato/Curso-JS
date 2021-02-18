
        const ejercicio1 = (string = "")=>
        (!string) ?
         console.log("No se ha ingresado un texto")
         : console.log(`El texto revertido es: ${string.split('').reverse().join('')}`);
         //ejercicio1("hola");

         function ejercicio2(string ="",palabra=""){
            if(!string) return console.log("No se ha ingreasado el texto");
            if(!palabra) return console.log("No se ha ingresado una palabra");
            let palabras = string.toLowerCase().split(' '), cont = 0;
            for(i=0; i<palabra.length; i++){
                (palabras[i] === palabra) ? cont++ : "";
            }
            return console.log(`la palabra ${palabra} se repite ${cont}`);
         }

         //ejercicio2("hola mundo hola", "hola");

        const ejercicio3 = (string="") =>{
            if(!string) return console.log("No ha ingresado el texto");
            
            if( string.toLowerCase() == [...string].reverse().join('').toLowerCase())
                return console.log(`La palabra ${string} es palindromo`);
            
            return console.log("no funciono");
        }

        //ejercicio3("Salas");

        const ejercicio4 = (string="",texto="") =>/*{
            if(!string && !texto) return console.log("No ha ingresado el texto");
            prueba1 = string.split("");
            prueba2 = texto.split("");
            for(let i=0;i < prueba1.length;i++){
                for(let j=0; j< prueba2.length;j++ ){
                    if(prueba1[i]==prueba2[j]){prueba1.splice(i,1)}
                }
            }
            return console.log(prueba1.join(''));
        }*/

        !texto && !string
            ? console.log("no se ingreso parametros requeridos")
            : console.log(string.replace(new RegExp(texto,"ig"),""))

        //ejercicio4("hola, adios","o")

        const ejercicio9 = () => console.log(Math.floor((Math.random()*100) +501))
        //ejercicio9();

        const ejercicio10 = (number) => {
            return +[...(number+'')].reverse().join('') == number;

        }
        //console.log( +[...9001+''].join(''));

        const ejercicio11 = n => +!n || n * ejercicio11(--n);

        //console.log(ejercicio11(4));

        const ejercicio12 = n => {
          if(typeof n !== 'number' && +!n == 1) return console.log("Ingrese un número");
          let cont=0;
          for(let i=2;i<=n;i++){
              ((n%i) == 0) ? cont++ : '';
            } 
          (cont>1) ? console.log(false) : console.log(true);
          console.log(!n);
        }

       // ejercicio12(-8);

        const ejercicio13 = n => console.log(n%2==0 ? "es par" : "no es par");

        //ejercicio13(4);

        const ejercicio14 = (n,string) => (string == 'C') ? console.log((n * (9/5)) + 32) : console.log((n - 32) * (5/9));

        //ejercicio14(32,"F");
        
        const ejercicio15 = (n,base) => {
            if(base == 2){
                if(Array.isArray((n+"").match(/[2-9]/g))) 
                    return console.log("no es un numero binario");
                return console.log(parseInt(n,2));
            }

            return console.log(n.toString(2));
        }

        const ejercicio16 = (n,descuento) => 
            (typeof n != 'number' && typeof descuento != 'number') ?
            console.log("no es un numero") 
            : console.log((100-descuento)*(n/100));

        //ejercicio16(1000,20);

        const ejercicio17 = (date = undefined) =>{
            if(date === undefined) return console.warn("No se ha ingresado la fecha");
            if(!(date instanceof Date)) return console.error("El valor ingresado no es un fecha valida");

            let hoyFecha = new Date().getTime() - date.getTime(),
            aniosEnMS = 1000*60*60*24*365
            aniosHumanos = Math.floor(hoyFecha/aniosEnMS);

            return (Math.sign(aniosHumanos)===-1)
             ? console.log(`Faltan ${Math.abs(aniosHumanos)} años para el ${date.getFullYear()}`)
             :  (Math.sign(aniosHumanos) === 1) 
               ? console.log(`Han pasado ${aniosHumanos} años, desde ${date.getFullYear()}`)
               : console.log(`Estamos en el año actual ${date.getFullYear()}`)
        }

        //ejercicio17(new Date(2505,4,5));

        const ejercicio18 = (string = "") =>{
            if(!string) return console.log("No se ha ingresado");

            let vocales = (string.toLowerCase()).match(/[aeiou]/g).length,
            consonates = string.replace(/\s/g, "").split('').length - vocales;

            return console.log(`Vocales: ${vocales}, Consonantes: ${consonates}`);

        }
        
        //ejercicio18("Hola mundo");

        const ejercicio19 = (string = "") =>{
            if(!string) return console.log("No se ha ingresado");
            
            return console.log(/^([A-Z]{1}[a-z]{2,}[ ]?){1,2}$/g.test(string));
        }

        //ejercicio19("johnny garcia");

        const ejercicio20 = (string ="") => (!string) 
         ? console.log("No se ha ingresado") 
         : console.log(/^([\w-_.])+@[\w]+\.[\w]{2,6}/g.test(string));
        
        //ejercicio20("jhonny@");
        
        const ejercicio21 = ( arr = undefined ) =>{
            if(arr === undefined) return console.log("Ingrese el arreglo");
            
            /*for(let i=0;i< arr.length;i++){
                arr[i] = arr[i]*arr[i];
            }
            return console.log(arr);*/

            return arr.reduce((acc,curr)=>[...acc,curr**2],[]);
        } 
        
        //const fn = arr => arr.reduce((acc,curr)=>acc.concat([curr]),[])
        
        //console.log(ejercicio21([1,5,10]));

        const ejercicio22 = (arr = undefined) =>{
            if(arr === undefined) return console.log("Ingrese el arreglo");
            return console.log([Math.max(...arr),Math.min(...arr)]);

        }
        
        //ejercicio22([1,3,5,-5]);

        const ejercicio23 = (arr = undefined) =>
            arr.reduce((acc,curr)=>{
            curr%2 ===0 ? acc["pares"] =  acc["pares"].concat([curr]) : acc["impares"] =  acc["impares"].concat([curr])
            return acc
            },{"pares":[],"impares":[]})
        
            /*const fn = arr => arr.reduce((acc,curr)=>{
            curr%2 ===0 ? acc["pares"].push(curr) : acc["impares"].push(curr)
            return acc
            },{"pares":[],"impares":[]})*/

        //console.log(ejercicio23([1,2,3,4,5,6]));

        const ejercicio24 = arr => {
            return {"asc": [...arr].sort((a,b)=>a-b),"des":[...arr].sort((a,b)=>b-a)};
        }

        //console.log(ejercicio24([1,5,3,4,10]));

        const ejercicio25 = arr => {
            return [...arr].sort((a,b)=>{
                if(a-b) return
            })
        }

        //console.log(ejercicio25([1,1,3,5]));

        const ejercicio26 = (array = undefined) => {
        if (array === undefined) return console.warn("No se ha ingresado un arreglo");
        if (!(array instanceof Array)) return console.error("El valor ingresado no es un arreglo");
        if (array.length === 0) return console.warn("El arreglo ingresado no puede estar vacío");
        if (array.length === 1) return console.warn("El arreglo ingresado debe tener al menos 2 elementos");

        let conjunto = [...new Set(array)];

        return console.info(conjunto)
        }

        ejercicio26(["x", 10, "x", 2, "10", 10, true, true]);

        const ejercicio27 = (array = undefined) => array.reduce((arr,acc)=> arr + acc/array.length, 0);

        console.log(ejercicio27([1,2,3]));

