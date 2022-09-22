// aca teno que poner que arme  las tarjetas desde el localstorage

const comision1 = 1.15;
let mensajesTarjetas1 = {
    idUnico: `El id del viaje es `,
    fumador: "usted podria fumar en el vehiculo",
    noFumador: "usted NO podria fumar en el vehiculo",
    noAnimales: "usted NO podria llevar mascotas",
    animales: "usted podria llevar animales",
    maleta: "usted podria llevar maleta",
    noMaleta: "usted NO podria llevar maletas",
    peaje: "Los precios incluyen los peajes y gastos",
    noPeaje: "Los precios NO incluyen los peajes y gastos",
    precioTotal: `El precio por pasajero es de $ `,
    horaSalida: `El Carry saldrá a las `,
    diaSalida: `El Carry saldrá el dia `,

    horaLlegada: `El Carry llegará a las `,
};


class Viaje {
    constructor(obj) {
        this.id = obj.id;
        this.trayecto = obj.origen + "hasta " + obj.destino;
        this.horarioSalida = `El Carry sale a las` + obj.horaSalida;
        this.horarioDestino = `El Carry llega a las` + obj.horaDestino;
        this.diaSalida = `El carry saldrá el dia ` + obj.diaSalida;
        this.diaLlegada = `El carry legará el dia ` + obj.diaLlegada;
        this.mensaje = obj.mensaje;
        if (obj.fumar == "true") {
            this.maletas = mensajesTarjetas1.fumador
        } else {
            this.maletas = mensajesTarjetas1.noFumador
        };
        //mascota
        if (obj.mascota == "true") {
            this.mascotas = mensajesTarjetas1.animales;
        } else {
            this.mascotas = mensajesTarjetas1.noAnimales;
        };
        //maleta
        if (obj.maleta == "true") {
            this.maletas = mensajesTarjetas1.maleta;
        } else { this.maletas = mensajesTarjetas1.noMaleta
        };
        //peajes
        if (obj.peajes == "true") {
            this.peajes = mensajesTarjetas1.peaje;
        } else {
            this.peajes = mensajesTarjetas1.noPeaje;
        };
        //
        this.precio = Number(obj.precio)* comision1 ;
    }
}

//funcion recuperar datos
//recupero el viaje
let cargados = JSON.parse(localStorage.getItem("viajes"));
let viajesCargados = [];
tarjetasEnHTML = document.getElementById("tarjetear");
//crear objeto por cada uno
for (let viaje of cargados)
    viajesCargados.push(new Viaje(viaje));
//funcion escrbir el codigo hacia la nueva pagina
function cargarTarjeta (){
for (viaje of viajesCargados) { 
    let viajeEnTarjetaIndex = `<section  class="CardsViaje">
    <div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 id="tituloTarjetaCarry" class="card-title">${viaje.trayecto}</h5>
            <p id="mensajeCarry" class="card-text">${viaje.mensaje}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li id="diaSalidaCarry" class="list-group-item">${viaje.diaSalida}</li>
            <li id="horaSalidaCarry" class="list-group-item">${viaje.horaSalida}</li>
            <li id="horaLlegadaCarry" class="list-group-item">${viaje.horaLlegada}/li>
            <li id="idUnicoCarry" class="list-group-item">${viaje.id}</li>
            <li id="fumarCarry" class="list-group-item">${viaje.fumar}</li>
            <li id="mascotasCarry" class="list-group-item">${viaje.mascotas}</li>
            <li id="maletasCarry" class="list-group-item">P${viaje.maletas}</li>
            <li id="peajesCarry" class="list-group-item">${viaje.peajes}</li>
            <li id="precioCarry" class="list-group-item">${viaje.precio}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="reservarAsiento">Reservar asiento</a>
            <a href="#" class="verPerfilDelCarry">Ver perfil del Carry</a>
        </div>
    </div>
</section>`
tarjetasEnHTML.innerText =+ viajeEnTarjetaIndex;
}
};
document.onload = () => { let subirnuevo = document.getElementById("subirnuevo");
subirnuevo.addEventListener(`click`, () => { cargarTarjeta();});
alert("cambios aplicados");}
//PROGRAMAR QUE AL ACEPTAR EL VIAJE SE MANDE UNA NUEVA TARJETA A INDEX
