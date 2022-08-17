



/*
    ===== Código de TypeScript =====
*/

//Destructuracion de objetos
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalle:Detalle
}

interface Detalle{
    autor:string;
    categoria:number;
}
const reproductor:Reproductor ={
    volumen: 10,
    segundo: 50,
    cancion: "cuando nadie ve",
    detalle:{
        autor:"morat",
        categoria:5
    }
}

const autor= "fulanito";
const {volumen:vol,segundo,detalle:{autor:autorDetalle}} = reproductor;

//const { autor}= detalle;

console.log("el volumen actual es de: ", + reproductor.volumen);
console.log("el autor es: ", vol);


//destructuración de arreglos

const Onepiece: string[] =["luffy","Nico Robin", "franky"];
const [, p2 ,] = Onepiece //se separan con comaspara que recorra las posiciones


console.log('personaje 1:', Onepiece[0]);
console.log('personaje 2: ',p2);