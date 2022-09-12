let provinciaDestino;
let provinciaOrigen;


let formularioCarry = document.getElementById ("formularioCarry");
formularioCarry.addEventListener("submit", (e)=>{
    e.preventDefault();
    let infoFormulario = e.target.children;
    provinciaOrigen = infoFormulario[0].value;
    provinciaDestino = infoFormulario[1].value;
    console.log (infoFormulario);
});

let trayecto= `${provinciaOrigen} hasta ${provinciaDestino}`;
let tituloTarjeta = document.getElementById("tituloTarjeta");
tituloTarjeta.innerText= trayecto;

