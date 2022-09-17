//Variables y constantes
const comision = 1.15;
//form
let formularioCarry = document.getElementById("formularioCarry");
//variables de partes de tarjeta
let tituloTarjetaCarry = document.getElementById("tituloTarjetaCarry");
let mensajeCarry = document.getElementById("mensajeCarry");
let mascotaCarry = document.getElementById("mascotasCarry");
let fumarCarry = document.getElementById("fumarCarry");
let maletaCarry = document.getElementById("maletaCarry");
let peajesCarry = document.getElementById("peajesCarry");
let precioCarry = document.getElementById("precioCarry");
//HTMLColection
let infoFormulario;
let precioTotal;
let incluyePeajes;
//funciones de precio a mostrar
function precioTotalCarry() {
    precioTotal = Number(document.getElementById("precio").value) * comision
};
//mensajes para mostrar
let mensajesTarjetas= {
    fumador: "usted podria fumar en el vehiculo",
    noFumador: "usted podria llevar mascotas",
    noAnimales: "usted NO podria llevar mascotas",
    animales: "usted podria llevar animales",
    maleta: "usted podria llevar maleta",
    noMaleta: "usted NO podria llevar maletas",
    peaje: "Los precios incluyen los peajes y gastos",
    noPeaje: "Los precios NO incluyen los peajes y gastos",
    precioTotal: `El precio por pasajero es de $ ${precioTotal}`,
};

//codigo ejecutable
formularioCarry.addEventListener("submit", (e) => {
    e.preventDefault();
    infoFormulario = e.target.children;
    //trayecto en tarjeta
    let provinciaOrigenSelec = document.getElementById("provinciaOrigen").value;
    let provinciaDestinoSelec = document.getElementById("provinciaDestino").value;
    let trayecto = `${provinciaOrigenSelec} hasta ${provinciaDestinoSelec}`;
    tituloTarjetaCarry.innerText = trayecto;
    //mensaje del usuario
    mensajeCarry.innerText = document.getElementById("mensajeAPasajero").value;
    //fumar
    if (document.getElementById("fumar").checked === true) {
        fumarCarry.innerText = mensajesTarjetas.fumador;
    } else { fumarCarry.innerText = mensajesTarjetas.noFumador }
    //mascota
    if (document.getElementById("mascota").checked === true) {
        mascotasCarry.innerText = mensajesTarjetas.animales;
    } else { mascotaCarry.innerText = mensajesTarjetas.noAnimales;
    };
    //maleta
    if (document.getElementById("maleta").checked === true) {
        maletasCarry.innerText = mensajesTarjetas.maleta;
    } else { maletasCarry.innerText = mensajesTarjetas.noMaleta }
    //peajes
    if (document.getElementById("peajes").checked === true) {
        peajesCarry.innerText = mensajesTarjetas.peaje;
    } else { peajesCarry.innerText = mensajesTarjetas.noPeaje; 
    };
    //precio
    precioTotalCarry();
    precioCarry.innerText = mensajesTarjetas.precioTotal;
});

//Objeto del viaje 

let nuevoViaje = {
    //id = Math.random()*1000
    origen: document.getElementById("provinciaOrigen").value,
    destino: document.getElementById("provinciaDestino").value,
    fumar: document.getElementById("fumar").checked,
    mascotas: document.getElementById("mascota").checked,
    maletas: document.getElementById("maleta").checked,
    peajes: document.getElementById("peajes").checked,
    precio: Number(document.getElementById("precio").value),
}
console.log (nuevoViaje);

//prueba LOCALSTORAGE
const dniInicio = document.getElementById(DniRegistro)
sessionStorage.setItem


let newArray3 = productos.map((productos) => productos.producto, productos.productos.precio * 8);
console.log(newArray3);