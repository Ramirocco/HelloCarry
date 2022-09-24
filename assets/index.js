//Variables y constantes
const comision = 1.15;
//form
let formularioCarry = document.getElementById("formularioCarry");
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
let arraysViajes= [ {} ];

//mensajes para mostrar
let mensajesTarjetas = {
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
    //Horarios
    let horaSalida = document.getElementById("horaSalida").value;
    let horaLlegada = document.getElementById("horaLlegada").value;
    horaSalidaCarry.innerText = mensajesTarjetas.horaLlegada + horaSalida;
    horaLlegadaCarry.innerText = mensajesTarjetas.horaSalida + horaLlegada;
    //dia salida
    let diaSalida = document.getElementById("diaSalida").value;
    diaSalidaCarry.innerText = mensajesTarjetas.diaSalida + diaSalida;
    //mensaje del usuario
    mensajeCarry.innerText = document.getElementById("mensajeAPasajero").value;
    //asignacion de id unico
    function AsignarId(){ idUnico = asignarId};
        //si ese id NO se repite entonces BREACK, SI SI se repite, asigno otro 
    AsignarId();
    idUnicoCarry.innerText = mensajesTarjetas.idUnico +  idUnico;
    //fumar
    document.getElementById("fumar").checked ? fumarCarry.innerText = mensajesTarjetas.fumador: fumarCarry.innerText = mensajesTarjetas.noFumador ;
    //mascota
    document.getElementById("mascota").checked ? mascotasCarry.innerText = mensajesTarjetas.animales: mascotaCarry.innerText = mensajesTarjetas.noAnimales;
    //maleta
    document.getElementById("maleta").checked ? maletasCarry.innerText = mensajesTarjetas.maleta :maletasCarry.innerText = mensajesTarjetas.noMaleta ;
    //peajes
    document.getElementById("peajes").checked ? peajesCarry.innerText = mensajesTarjetas.peaje :peajesCarry.innerText = mensajesTarjetas.noPeaje;
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
        diaSalida: document.getElementById("diaSalida").value,
        horaSalida: document.getElementById("horaSalida").value,
        horaLlegada: document.getElementById("horaLlegada").value,
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

