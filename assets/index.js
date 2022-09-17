//Variables y constantes
const comision = 0.15;
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
//mensajes para mostrar
let mensajeFumador= "usted podria fumar en el vehiculo";
let mensajeNoFumador = "usted NO podria fumar en el vehiculo";
let mensajeAnimales= "usted podria llevar mascotas";
let mensajeNoAnimales = "usted NO podria llevar mascotas";
let mensajeMaleta= "usted podria llevar maleta";
let mensajeNoMaleta = "usted NO podria llevar maletas";
let mensajePeaje= "Los precios incluyen los peajes y gastos";
let mensajeNoPeaje = "Los precios NO incluyen los peajes y gastos";

//HTMLColection
let infoFormulario;

let precioTotal;
let incluyePeajes;

function precioTotalCarry() {
    precioTotal = Number(infoFormulario[10].lastElementChild.value) * comision
};

//codigo ejecutable
formularioCarry.addEventListener("submit", (e) => {
    e.preventDefault();
    infoFormulario = e.target.children;
    //ver info//
    console.log(infoFormulario);
    //trayecto en tarjeta
    let provinciaOrigenSelec = infoFormulario[1].lastElementChild.value;
    let provinciaDestinoSelec = infoFormulario[2].lastElementChild.value;
    let trayecto = `${provinciaOrigenSelec} hasta ${provinciaDestinoSelec}`;
    tituloTarjetaCarry.innerText = trayecto;
    //mensaje del usuario
    mensajeCarry.innerText = document.getElementById("mensajeAPasajero").value;
    //fumar
    if (infoFormulario[6].lastElementChild.value === "true") {
        fumarCarry.innerText = mensajeFumador;
    } else { fumarCarry.innerText = mensajeNoFumador}
    //mascota
    if (infoFormulario[7].lastElementChild.value === "true") {
        mascotaCarry.innerText = mensajeAnimales;
    } else {mascotaCarry.innerText = mensajeNoAnimales;};
    //maleta
    if (infoFormulario[8][1][1].checked === "true") {
        maletasCarry.innerText = mensajeMaleta;
    } else { maletasCarry.innerText = mensajeNoMaleta}
    //peajes
    if (infoFormulario[9][1][1].checked === "true") {
        peajesCarry.innerText = mensajePeaje;
    } else { peajesCarry.innerText = mensajeNoPeaje; }
    //precio
    precioTotalCarry();
    precioCarry.innerText = precioTotal;
});

