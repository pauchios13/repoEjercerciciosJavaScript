/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

    export function add(a,b){
        return a+b
    }
    console.log(add(1,3))

// 2. Exporta una constante

    export const PI = 3.1415

// 3. Exporta una clase
 
    export class Circle {

        constructor(radius) {
            this.radius = radius
        }

        area() {
            return Math.PI * Math.pow(this.radius, 2)
        }

        perimeter() {
            return 2 * Math.PI * this.radius
        }

    }
// 4. Importa una función
    import { add } from "./export-modules.js"

// 5. Importa una constante
    import {PI} from "./export-modules.js"

// 6. Importa una clase 
    import { Circle } from "./export-modules.js"

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

    export default { add, PI, Circle };

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// 9. Exporta una función, una constante y una clase desde una carpeta


// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior