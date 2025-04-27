/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

let miObject
try {
    console.log(miObject.email)

} catch(error)  {
    console.log("finaliza con error" + error.message)
    

}
// 2. Captura una excepción utilizando try-catch y finally

try {
    console.log(miObject.email)
} catch(error)  {
    console.log("finaliza con error" + error.message)   
} finally {
    console.log("siempre se ejecuta")
}
// 3. Lanza una excepción genérica
    function sumaInteger(a,b){

        if(!Number.isInteger(a) || !Number.isInteger(b)){
            throw new Error("no son numeros enteros")
        }
        return a+b
    }
    try{
        console.log(sumaInteger(2,"10"))

    }catch(error){
        console.log("hay un error." + " " + error.message)

    }

// 4. Crea una excepción personalizada

    class sumaIntegerError extends Error{
        constructor(message, a, b){
            super(message)
            this.a = a
            this.b = b 
        }
        printNumbers(){
            console.log(this.a, "+" , this.b)
        }
        }

    try {
        console.log(sumaInteger(0,10))
    } catch (error) {
        console.log("Se ha producido un error personalizado" + error.message)
        error.printNumbers()
    }
    
// 5. Lanza una excepción personalizada

function excepcionPersonalizada() {
    throw new sumaIntegerError("Error personalizado lanzado", 5, 10);
}

try {
    excepcionPersonalizada();
} catch (error) {
    console.log("Excepción personalizada: " + error.message);
    error.printNumbers(); 
}

// 6. Lanza varias excepciones según una lógica definida

function validarEdad(edad) {
    if (edad < 0) {
      throw new Error("La edad no puede ser negativa.");
    }
    if (edad < 18) {
      throw new Error("Debes ser mayor de 18 años.");
    }
    return "Edad válida";
  }
  
  try {
    console.log(validarEdad(-5));
  } catch (error) {
    console.error("Error capturado:", error.message);
  }
  
  try {
    console.log(validarEdad(16));
  } catch (error) {
    console.error("Error capturado:", error.message);
  }
  
  try {
    console.log(validarEdad(20));
  } catch (error) {
    console.error("Error capturado:", error.message);
  }

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10