
/*
    ===== Código de TypeScript =====
*/
//Encadenamiento opcional
//
interface pasajero {
    nombre: string;
    edad: number;
    hijos?: string[]
}
const pasajeros1: pasajero = {
    nombre: "jorge",
    edad: 12,
    hijos: ["nala", "tina"]
}

const pasajeros2: pasajero = {
    nombre: "melissa",
    edad: 12,
}
const pasajeros3: pasajero = {
    nombre: "melissa",
    edad: 12,
    hijos: ["fernando"]
}
function imprimirhijos(pasajero: pasajero): void {
    const cuantoshijos = pasajero.hijos?.length || 0;
    console.log(cuantoshijos);
}
imprimirhijos(pasajeros2);