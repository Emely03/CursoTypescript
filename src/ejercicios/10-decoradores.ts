
/*
    ===== Código de TypeScript =====
*/
//Decoradores de clases:Patron de diseño que permite añadir nuefos comportamioento alos objetos
//https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators 
//Angular utiliza los decoradores para cambiar las cosas, con angular casi siempre son clases

//TypeScript podemos usarlos activando la propiedad experimentalDecorators del tsconfig.json


//decorator factory: Función que retorna otra función,que será llamada en el tiempo de ejecucción del decorador
function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class superclase {
    public propiedad: string = 'abcvgf';

    //metodo
    mostrar() {
        console.log('mostar')
    }

}
console.log(superclase);
const clase = new superclase();
console.log(clase.propiedad);

