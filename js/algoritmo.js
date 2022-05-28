debugger

// Primera pregunta - Nombre

let nombre = prompt("¿Cómo te llamás?")

    if (nombre =="") {
        alert("¡Hola ser misterioso!")
    } 
    
        else if (nombre !="") {
            alert("Hola " + nombre + " vamos a jugar un rato a las adivinanzas")
        } 


// Segunda pregunta - Temática

let temaElegido = prompt("Elegí una temática: ¿música o películas?")


    // Si eligió temática música

    if (temaElegido =="") {
        alert("Dale, ponete las pilas. F5 y elegí un tema.")
    }

    if (temaElegido !="" && (temaElegido == "musica" || temaElegido == "MUSICA" || temaElegido == "música" ||temaElegido == "MÚSICA" || temaElegido == "Música")) {


        // Elegir número-Cantidad de pistas que tendrá
        
        let numeroElegidoM = parseInt(prompt("Elegí un número del 1 al 10"))


            // Si el número es menor o igual a 10

            if (numeroElegidoM <= 10) {


                // Inicio de ciclo for para pistas

                for (let i = 0; i <= numeroElegidoM; i++) {

                    if (i == 1) {
                        alert("Pista " + i + ": Este músico a los 13 años, ya era profesor de piano, teoría y solfeo.")            
                    }

                    if (i == 2) {
                        alert("Pista " + i + ": Le gusta el fútbol y es hincha del River Plate.")                
                    }

                    if (i == 3) {
                        alert("Pista " + i + ": Tiene vitiligo, afección que desarrolló luego de una crisis nerviosa.")                
                    }
                    
                    if (i == 4) {
                        alert("Pista " + i + ": Fundó 3 bandas diferentes.")                
                    }

                    if (i == 5) {
                        alert("Pista " + i + ": Una de ellas, de rock progresivo, se llamó La Máquina de Hacer Pájaros.")                
                    }

                    if (i == 6) {
                        alert("Pista " + i + ": En 2009 dio el famoso Concierto Subacuático.")                
                    }

                    if (i == 7) {
                        alert("Pista " + i + ": Se tiño el pelo rubio en homenaje a la muerte de Kurt Cobain en 1994.")                
                    }

                    if (i == 8) {
                        alert("Pista " + i + ": Es famoso por su oído absoluto.")                
                    }

                    if (i == 9) {
                        alert("Pista " + i + ": Hizo una canción en conjunto con su amigo, Luis Alberto Spinetta.")                
                    }

                    if (i == 10) {
                        alert("Pista " + i + ": Le gusta ir de la cama al living")                
                    }      
                
                }


                // Inicio de do...while for para envío de respuesta

                let respuesta = 0

                alert("A continuación podrás ingresar la respuesta todas las veces que quieras.")

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
                            alert("¡Felicitaciones " + nombre + " adivinaste! Con esto terminamos el juego, es hora de hacer algo más productivo.")
                        }  

                        


            // Si el número NO es menor o igual a 10
                
            } else if (numeroElegidoM > 10) {

                alert(nombre + " vas a tener " + numeroElegidoM + " años de mala suerte. Para evitarlos, presioná F5 y volvé a intentarlo.")

            }

    }





    

