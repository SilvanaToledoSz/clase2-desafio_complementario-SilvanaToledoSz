debugger

// Primera pregunta - Nombre

let nombre = prompt("¿Cómo te llamás?")

    if (nombre !="") {
        alert("Hola " + nombre + " vamos a jugar un rato a las adivinanzas")
    } 


// Segunda pregunta - Temática

let temaElegido = prompt("Elegí una temática: ¿música o películas?")


    // Si eligió temática música

    if (temaElegido !="" && (temaElegido == "musica" || temaElegido == "MUSICA" || temaElegido == "música" ||temaElegido == "MÚSICA" || temaElegido == "Música")) {


        // Elegir número-Cantidad de pistas que tendrá
        
        let numeroElegidoM = parseInt(prompt("Elegí un número del 1 al 10"))


            // Si el número es menor o igual a 10

            if (numeroElegidoM <= 10) {


                // Inicio de ciclo for para pistas

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


                // Inicio de do...while for para envío de respuesta

                let respuesta = 0

                alert("A continuación podrás ingresar la respuesta todas las veces que quieras. Escribilo en MAYÚSCULAS y sin tilde.")

                    do {
                        respuesta = prompt("¿Cuál es la respuesta?")
                        console.log(respuesta)
                    }

                    while ((respuesta != "CHARLY GARCIA") && (respuesta != "charly garcia") && (respuesta != "CHARLY GARCÍA") && (respuesta != "charly garcía") && (respuesta != "Charly García") && (respuesta != "")) 


                        // Alerta si acierta la respuesta

                        if (respuesta == "") {
                            alert("¿Te cansaste de jugar? La respuesta correcta era Charly García.")
                        }

                        if ((respuesta == "CHARLY GARCIA") || (respuesta == "charly garcia") || (respuesta == "CHARLY GARCÍA") || (respuesta == "charly garcía") || (respuesta == "Charly García")) {
                            alert("¡Felicitaciones " + nombre + " adivinaste! Con esto terminamos el juego, es hora de hacer algo más productivo")
                        }  

                        


            // Si el número NO es menor o igual a 10
                
            } else if (numeroElegidoM > 10) {

                alert(nombre + " vas a tener " + numeroElegidoM + " años de mala suerte. Para evitarlos, presioná F5 y volvé a intentarlo.")

            }

    }





    

