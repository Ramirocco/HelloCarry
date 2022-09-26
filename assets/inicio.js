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
        //if optimizado
        obj.fumar == "true" ? this.maletas = mensajesTarjetas1.fumador : this.maletas = mensajesTarjetas1.noFumador;
        //mascota
        obj.mascota == "true" ? this.mascotas = mensajesTarjetas1.animales : this.mascotas = mensajesTarjetas1.noAnimales;
        //maleta
        obj.maleta == "true" ? this.maletas = mensajesTarjetas1.maleta : this.maletas = mensajesTarjetas1.noMaleta;
        //peajes
        obj.peajes == "true" ? this.peajes = mensajesTarjetas1.peaje : this.peajes = mensajesTarjetas1.noPeaje;
        //
        this.precio = Number(obj.precio) * comision1;
    }
}

//funcion recuperar datos
//recupero el viaje
let cargados = JSON.parse(localStorage.getItem("viajes"));
let viajesCargados = [];

//crear objeto por cada uno
for (let viaje of cargados)
    viajesCargados.push(new Viaje(viaje));
//funcion escrbir el codigo hacia la nueva pagina
function cargarTarjeta() {
    console.log(viajesCargados);
    for (viaje of viajesCargados) {
        console.log(viaje);
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
</section>`;
        let tarjetasEnHTML = document.getElementById("tarjetear");
        console.log(viajeEnTarjetaIndex);
        console.log(tarjetasEnHTML);
        tarjetasEnHTML.innerText = + viajeEnTarjetaIndex;
    }
};

let subirnuevo = document.getElementById("subirnuevo");
console.log(subirnuevo);

subirnuevo.addEventListener(`click`, () => {  cargarTarjeta();     
     Swal.fire({
     title: 'Ahora si, Carry',
     text: "a esperar pasajeros",
     icon: 'success',
     showCancelButton: false,
     confirmButtonColor: '#3085d6',
     confirmButtonText: 'Genial, Paaa'
 }); });


//PROGRAMAR QUE AL ACEPTAR EL VIAJE SE MANDE UNA NUEVA TARJETA A INDEX
