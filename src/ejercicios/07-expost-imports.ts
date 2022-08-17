



/*
    ===== Código de TypeScript =====
*/
//Export y imports
import { calculartotal, Producto } from "./06-DestructuracionArgumentos";




//Importanciones y exportaciones
const compras: Producto []=[
{
    descuento:"telefono",
    precio:130
},
{
    descuento:"smarth",
    precio:130
}
];
const [total,total2] = calculartotal(compras);
console.log('total', total);
console.log('ISV',total2)