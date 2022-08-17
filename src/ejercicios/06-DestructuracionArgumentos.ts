



/*
    ===== Código de TypeScript =====
*/


//destructuracion de argumentos

export interface Producto {
    descuento:string;
    precio: number;
}

const telefono:Producto ={
    descuento:'Huawei',
    precio: 30,
}
const Smarth:Producto ={
    descuento:'Samsung',
    precio: 410,
}
export function calculartotal(productos:Producto []):[number,number]{
    let total=0;

  productos.forEach (({precio}) => {
        total +=precio;
    })
        return [total,total*1.2];

    }
   const articulosTotales = [telefono,Smarth];
   const total2 = calculartotal(articulosTotales);
    console.log('total2: ', total2)
