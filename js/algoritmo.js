debugger

let nombre = prompt("¿Cómo te llamás?")

if (nombre !="") {
    alert("Hola " + nombre + " vamos a jugar un rato a las adivinanzas")
} 

let numeroElegido = parseInt(prompt("Elegí un número del 1 al 10"))

if (numeroElegido <= 10) {

    for (let i = 0; i <= numeroElegido; i++) {

        if (i == 1) {
            alert("Pista1")
        }

        if (i == 2) {
            alert("Pista2")
        }

        if (i == 3) {
            alert("Pista3")
        }
        
        if (i == 4) {
            alert("Pista4")
        }

        if (i == 5) {
            alert("Pista5")
        }

        if (i == 6) {
            alert("Pista6")
        }

        if (i == 7) {
            alert("Pista7")
        }

        if (i == 8) {
            alert("Pista8")
        }

        if (i == 9) {
            alert("Pista9")
        }

        if (i == 10) {
            alert("Pista10")
        }
    
    
    }

    
} else if (numeroElegido > 10) {

    alert(nombre + " vas a tener " + numeroElegido + " años de mala suerte. Para evitarlos, presioná F5 y volvé a intentarlo.")

}



    

