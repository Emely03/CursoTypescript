
/*
    ===== Código de TypeScript =====
*/

class Persona{
    constructor(
        public nombre:string, 
        public direccion:string, 
        public edad:number
        ){}   
}
//Clase basicas,extender clases,se hereda de la clase persona
class anime2 extends Persona {
    /*alterEgo: string;
    edad: number;
    nombrereal: number;*/

    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombrereal: string) 
        {
        super(nombrereal,'Japan, Tokyo',edad);
    }

}
/*interface genero{
    alterEgo?: string;
    edad?:number;
    nombrereal?:number;
}*/
const shonen = new anime2('shonen',20,'one punch');
console.log(shonen);
