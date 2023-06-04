alert ("⚠️⚠️ OFERTAS DE HARDWARE ⚠️⚠️")

function cafecito() {
    alert(nombre + " mientras calculamos el costo final y tengas el mejor precio, tomate una tazita de cafe ☕")
}
function costo(precio){
    total = total + precio;
    alert('Su carrito actualmente se encuentra en $' + total);
}
let comprar
let eleccion
let placas_de_video
let procesador
let ram
let mother
let continuamos
let nombre = prompt("Hola! Bienvenido ¿Como te llamas?")
let total = 0
do {
    comprar = Number(prompt(nombre + " ¿Queres ampliar los componentes de la computadora?\n\n1 - Si\n2 - No\n\n  Se elige poniendo 1 ó 2"))
    if (comprar === 1){
        do {
        eleccion = Number(prompt("Elegi segun el número las ofertas de cada categoria\n\n1 - Placas de videos\n2 - Procesadores\n3 - Memoria ram\n4 - Placa Madre\n0 - Volver al menu"))
         

        if (eleccion === 1) {
            placas_de_video = Number(prompt("PLACAS DE VIDEO ASUS\n1 - Asus 3050\n2 - Asus 3060\n3 - Asus 3060ti\n4 - Asus 3070"))
            if (placas_de_video === 1){
                cafecito()
                alert(nombre + " el precio final de este producto es de $1000")
                costo(1000)
            }
            else if (placas_de_video === 2){
                cafecito()
                alert(nombre + " el precio final de este producto es de $1500")
                costo(1500)
            }
            else if (placas_de_video === 3){
                cafecito()
                alert(nombre + " el precio final de este producto es de $2000")
                costo(2000)                  
            }
            else if (placas_de_video === 4){
                cafecito()
                alert(nombre + " el precio final de este producto es de $3000")
                costo(3000) 
            }
            else {
                alert ("Dato incorrecto")
                continue
            }
        } 
    else if (eleccion === 2) {
        procesador = Number(prompt("PROCESADORES\n\n1 - Intel i5\n2 - Intel i7\n3 - AMD Ryzen 5\n4 - AMD Ryzen 7"))
        if (procesador === 1){
            cafecito()
            alert(nombre + " el precio final de este producto es de $1000")
            costo(1000)                  
        }
        else if (procesador === 2){
            cafecito()
            alert(nombre + " el precio final de este producto es de $1200")
            costo(1200)
        }
        else if (procesador === 3){
            cafecito()
            alert(nombre + " el precio final de este producto es de $1100")
            costo(1100)        
        }
        else if (procesador === 4){
            cafecito()
            alert(nombre + " el precio final de este producto es de $1400")
            costo(1400)
            }
            else {
                alert ("Dato incorrecto")
                continue
            }
            
        }
        else if (eleccion === 3) {
            ram = Number(prompt("MEMORIA RAM\n\n1 - 4 GB Kingston\n2 - 8 GB Kingston\n3 - 16 GB Kingston\n4 - 32 GB Kingston"))
            if (ram === 1){
                cafecito()
                alert(nombre + " el precio final de este producto es de $400")
                costo(400)                  
            }
            else if (ram === 2){
                cafecito()
                alert(nombre + " el precio final de este producto es de $700")
                costo(700)       
            }
            else if (ram === 3){
                cafecito()
                alert(nombre + " el precio final de este producto es de $1200")
                costo(1200)
            }
            else if (ram === 4){
                cafecito()
                alert(nombre + " el precio final de este producto es de $2000")
                costo(2000)
                }
            else {
                alert ("Dato incorrecto")
                continue
            }
        }
        else if (eleccion === 4) {
            mother = Number(prompt("MEMORIA RAM\n\n1 - Mother ASUS B560\n2 - Mother ASUS C660\n3 - Mother ASUS N540\n4 - Mother ASUS A610"))
            if (mother === 1){
                cafecito()
                alert(nombre + " el precio final de este producto es de $700")
                costo(700)        
            }
            else if (mother === 2){
                cafecito()
                alert(nombre + " el precio final de este producto es de $1000")
                costo(1000)
            }
            else if (mother === 3){
                cafecito()
                alert(nombre + " el precio final de este producto es de $800")
                costo(800)
            }
            else if (mother === 4){
                cafecito()
                alert(nombre + " el precio final de este producto es de $1100")
                costo(1100)
                }
            else {
                alert ("Dato incorrecto")
                continue
            }
        }
        
            
    } while (isNaN(eleccion) || eleccion < 0 || eleccion > 4) 
}
else if (comprar === 2 && total > 1) {
    alert ("Su costo final a pagar es de $" + total)
    break
}
    else if(comprar === 2) {
        alert ("Okey! Tene un lindo dia " + nombre)
        break
        }
} while (comprar != 1 || comprar != 2) {
    alert ("Nos seguimos actualizando, muchas gracias por tu visita " + nombre + "\n\nVolve pronto")
}
