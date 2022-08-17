



/*
    ===== Código de TypeScript =====
*/

//Genéricos
//Para especificar que es generico se coloca<T>, donde t es un generico, se puede utilizar cualquier letra pero por lo general se utiliza la T que es estandar
function tipo<T>(argumento:T){
   return argumento; 
}

let tipostring = tipo("hola");
let tipoint = tipo(10);
let tipoarregloint = tipo([1,2,3,4,5,6,7,8]);
let tipoarreglostring= tipo(["apple","orange", "lemon"]);
//tipo explicito genericos
let tipoexplicito = tipo<string> ('number');
let tipoexplicitoint = tipo<number> (200);