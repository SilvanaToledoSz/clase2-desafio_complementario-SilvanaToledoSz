debugger

let nombre = prompt("¿Cómo te llamás?")

if (nombre !="") {
    alert("Hola " + nombre + " vamos a jugar un rato a las adivinanzas")
} 

let temaElegido = prompt("Elegí una temática: ¿música o películas?")

if (temaElegido !="" && (temaElegido == "musica" || temaElegido == "MUSICA" || temaElegido == "música" ||temaElegido == "MÚSICA" || temaElegido == "Música")) {
    let numeroElegidoM = parseInt(prompt("Elegí un número del 1 al 10"))

    if (numeroElegidoM <= 10) {

        for (let i = 0; i <= numeroElegidoM; i++) {

            if (i == 1) {
                alert("PistaMúsico1")            
            }

            if (i == 2) {
                alert("PistaMúsico2")                
            }

            if (i == 3) {
                alert("PistaMúsico3")                
            }
            
            if (i == 4) {
                alert("PistaMúsico4")                
            }

            if (i == 5) {
                alert("PistaMúsico5")                
            }

            if (i == 6) {
                alert("PistaMúsico6")                
            }

            if (i == 7) {
                alert("PistaMúsico7")                
            }

            if (i == 8) {
                alert("PistaMúsico8")                
            }

            if (i == 9) {
                alert("PistaMúsico9")                
            }

            if (i == 10) {
                alert("PistaMúsico10")                
            }      
        
        }

        let respuesta = 0

        alert("A continuación podrás ingresar la respuesta todas las veces que quieras. Escribilo en mayúsculas y sin tilde.")

        do {
            respuesta = prompt("¿Cuál es la respuesta?")
            console.log(respuesta)
        }

        while ( (respuesta != "CHARLY GARCIA") && (respuesta != "") ) 

        if (respuesta == "CHARLY GARCIA") {
            alert("¡Felicitaciones " + nombre + " adivinaste! Con esto terminamos el juego, es hora de hacer algo más productivo")
        }


        


        
        






        
    } else if (numeroElegidoM > 10) {

        alert(nombre + " vas a tener " + numeroElegidoM + " años de mala suerte. Para evitarlos, presioná F5 y volvé a intentarlo.")

    }

}





    

