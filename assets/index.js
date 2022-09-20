//Variables y constantes
const comision = 1.15;
//form
let formularioCarry = document.getElementById("formularioCarry");
let subirViaje = document.getElementById("subirViaje");
//variables de partes de tarjeta
let tituloTarjetaCarry = document.getElementById("tituloTarjetaCarry");
let mensajeCarry = document.getElementById("mensajeCarry");
let idUnicoCarry =  document.getElementById("idUnicoCarry");
let mascotaCarry = document.getElementById("mascotasCarry");
let fumarCarry = document.getElementById("fumarCarry");
let maletaCarry = document.getElementById("maletaCarry");
let peajesCarry = document.getElementById("peajesCarry");
let precioCarry = document.getElementById("precioCarry");
//HTMLColection
let infoFormulario;
let precioTotal;
let precioParcial;
let incluyePeajes;
let idUnico;
let nuevoViaje = {};
const arraysViajes= [ {} ]

//mensajes para mostrar
let mensajesTarjetas = {
    idUnico: `El id del viaje es `,
    fumador: "usted podria fumar en el vehiculo",
    noFumador: "usted podria llevar mascotas",
    noAnimales: "usted NO podria llevar mascotas",
    animales: "usted podria llevar animales",
    maleta: "usted podria llevar maleta",
    noMaleta: "usted NO podria llevar maletas",
    peaje: "Los precios incluyen los peajes y gastos",
    noPeaje: "Los precios NO incluyen los peajes y gastos",
    precioTotal: `El precio por pasajero es de $ `,
};

//codigo ejecutable
formularioCarry.addEventListener("submit", (e) => {
    e.preventDefault();
    infoFormulario = e.target.children;
    //trayecto en tarjeta
    let asignarId =  Math.ceil(Math.random() * 10000000  + 10000); 
    let provinciaOrigenSelec = document.getElementById("provinciaOrigen").value;
    let provinciaDestinoSelec = document.getElementById("provinciaDestino").value;
    let trayecto = `${provinciaOrigenSelec} hasta ${provinciaDestinoSelec}`;
    tituloTarjetaCarry.innerText = trayecto;
    //mensaje del usuario
    mensajeCarry.innerText = document.getElementById("mensajeAPasajero").value;
    //asignacion de id unico
    function AsignarId(){ idUnico = asignarId}
        //si ese id NO se repite entonces BREACK, SI SI se repite, asigno otro 
    AsignarId();
    idUnicoCarry.innerText = mensajesTarjetas.idUnico +  idUnico;
    //fumar
    if (document.getElementById("fumar").checked === true) {
        fumarCarry.innerText = mensajesTarjetas.fumador;
    } else { fumarCarry.innerText = mensajesTarjetas.noFumador }
    //mascota
    if (document.getElementById("mascota").checked === true) {
        mascotasCarry.innerText = mensajesTarjetas.animales;
    } else {
        mascotaCarry.innerText = mensajesTarjetas.noAnimales;
    };
    //maleta
    if (document.getElementById("maleta").checked === true) {
        maletasCarry.innerText = mensajesTarjetas.maleta;
    } else { maletasCarry.innerText = mensajesTarjetas.noMaleta }
    //peajes
    if (document.getElementById("peajes").checked === true) {
        peajesCarry.innerText = mensajesTarjetas.peaje;
    } else {
        peajesCarry.innerText = mensajesTarjetas.noPeaje;
    };
    //precio
    //funciones de precio a mostrar
function precioTotalCarry() {
    precioParcial = Number(document.getElementById("precio").value);
    precioTotal = precioParcial * comision;
};
    precioTotalCarry();
    precioCarry.innerText = mensajesTarjetas.precioTotal + precioTotal;
    //objeto de nuevo viaje
    nuevoViaje = {
        idUnico: asignarId,
        origen: document.getElementById("provinciaOrigen").value,
        destino: document.getElementById("provinciaDestino").value,
        mensaje: document.getElementById("mensajeAPasajero").value,
        fumar: document.getElementById("fumar").checked,
        mascotas: document.getElementById("mascota").checked,
        maletas: document.getElementById("maleta").checked,
        peajes: document.getElementById("peajes").checked,
        precio: document.getElementById("precio").value,
    }
    console.log(nuevoViaje);
    arraysViajes.push(nuevoViaje);
    localStorage.setItem (`viaje ${asignarId}`, JSON.stringify (nuevoViaje));
    localStorage.setItem (`viajes`, JSON.stringify (arraysViajes));
}
);
//PROGRAMAR QUE AL ACEPTAR EL VIAJE SE MANDE UNA NUEVA TARJETA A INDEX
subirViaje.addEventListener("click", (e) => {
alert ("su viaje fue cargado con éxito");
let tarjetaNueva = document.createElement (div)
tarjetaNueva.innerHTML =`"<div class="card" style="width: 18rem">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
    <h5 id="tituloTarjetaCarry" class="card-title">Trayecto del viaje</h5>
    <p id="mensajeCarry" class="card-text">Mensaje al pasajero</p>
</div>
<ul class="list-group list-group-flush">
    <li id="idUnicoCarry" class="list-group-item">ID</li>
    <li id="fumarCarry" class="list-group-item">Politica sobre fumar</li>
    <li id="mascotasCarry" class="list-group-item">Politica sobre mascotas</li>
    <li id="maletasCarry" class="list-group-item">Politica sobre maletas</li>
    <li id="peajesCarry" class="list-group-item">Politica sobre peajes</li>
    <li id="precioCarry" class="list-group-item">Politica sobre gastos</li>
</ul>
<div class="card-body">
    <a href="#" class="reservarAsiento">Reservar asiento</a>
    <a href="#" class="verPerfilDelCarry">Ver perfil del Carry</a>
</div>
</div>
<button id="subirViaje">Subir Viaje</button>`;
document.body.append(subirViaje);
});