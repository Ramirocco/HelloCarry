//variables de partes de tarjeta
let provinciaDestinoSelec;
let provinciaOrigenSelec;
const comision = 0.15
//HTMLColection
let infoFormulario;
let preciototal


let formularioCarry = document.getElementById("formularioCarry");
formularioCarry.addEventListener("submit", (e) => {
    e.preventDefault();
    infoFormulario = e.target.children;
    //ver info//
    console.log(infoFormulario);
    //trayecto en tarjeta
    provinciaOrigenSelec = infoFormulario[1].lastElementChild.value;
    provinciaDestinoSelec = infoFormulario[2].lastElementChild.value;
    let trayecto = `${provinciaOrigenSelec} hasta ${provinciaDestinoSelec}`;
    let tituloTarjetaCarry = document.getElementById("tituloTarjetaCarry");
    tituloTarjetaCarry.innerText = trayecto;
    //mensaje del usuario
    let mensaje = document.getElementById("mensajeCarry");
    mensaje.innerText = infoFormulario[3].lastElementChild.value
    //fumar
    let fumar = document.getElementById("fumarCarry");
    fumar.innerText = infoFormulario[6].lastElementChild.value
    //mascota
    let mascota = document.getElementById("mascotaCarry");
    mascota.innerText = infoFormulario[7].lastElementChild.value
    //maleta
    let maleta = document.getElementById("maletaCarry");
    maleta.innerText = infoFormulario[8].lastElementChild.value
    //peajes
    let peajes = document.getElementById("peajeCarry");
    peajes.innerText = infoFormulario[9].lastElementChild.value
    //precio
    let precio = document.getElementById("precioCarry");
    precioTotalCarry();
    preciototal = precioTotal
    precio.innerText = precioTotal
});

function precioTotalCarry(){
    precioTotal = infoFormulario[10].lastElementChild.value * comision  }