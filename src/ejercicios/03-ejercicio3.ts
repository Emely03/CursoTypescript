



/*
    ===== Código de TypeScript =====
*/

function sumar (a:number,b:number):number{
    return (a+b);
}
const sumarFlecha = (a:number,b:number):number =>{
    return a+b;
}
const resultado = sumar (102, 1)
console.log(resultado)

function multiplicar (numero:number, base:number, otronumero?:number){
    return numero*base;
}

const resultadomultiplicacion = multiplicar(10,20)
console.log(resultadomultiplicacion)

//Funciones con objetos como argumento
interface personajeGodWar{
    nombre:string
    puntosvidas:number;
    mostrarvidas:() => void;
}

function curar(personajes:personajeGodWar, curarVidas):void{
    personajes.puntosvidas+=curarVidas;
    console.log(personajes);
}

const nuevopersonaje:personajeGodWar={
    nombre: "Kratos",
    puntosvidas:120,
    mostrarvidas(){
        console.log('puntos de vida:' , this.puntosvidas);
    }
}
curar(nuevopersonaje,50);
nuevopersonaje.mostrarvidas();