



/*
    ===== Código de TypeScript =====
*/

let habilidad: string[]= ['apple', 'arange'];


interface Personaje{
    nombre: string;
    edad: number;
    estado:boolean;
    habilidades:string[];
    pueblonatal?:string;
}
const personaje:Personaje= {
    nombre: "emily",
    edad: 25,
    estado:true,
    habilidades: ['apple', 'arange']

}

personaje.pueblonatal='pueblo'
console.table(personaje)