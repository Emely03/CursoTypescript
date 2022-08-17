



/*
    ===== Código de TypeScript =====
*/

//objetos anidados
interface anime {
    nombre: string;
    años: number;
    pais: pais,
    mostrarpais: () => string;
}
interface pais {
    ciudad: string;
    region: string
}
const anime: anime = {
    nombre: "One piece",
    años: 10,
    pais: {
        ciudad: "Tokyo",
        region: "Kanto"
    },
    mostrarpais() {
        return this.nombre + "," + this.pais.ciudad + "," + "," + this.pais.region;
    }
}

const pais = anime.mostrarpais();
console.log(pais);

anime.mostrarpais