const uno = document.querySelector("#billie");
const dos = document.querySelector("#maneskin");
const tres = document.querySelector("#solene");
const cuatro = document.querySelector("#maria");
const cinco = document.querySelector("#warning");


const ventana = document.getElementById("ventana");
const tituloVentana = document.getElementById("tituloVentana");
let ventanabierta = false;

uno.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    tituloVentana.innerText = "Don't smile at me";
    ventana.style.display = "block";
    ventanabierta = true;
});

document.body.addEventListener('click', (evento) => {
    if(!ventanabierta) return;
    if(!ventana.contains(evento.target)) {
        ventana.style.display = "none";
        ventanabierta = false;
    }
});

const belly = document.querySelector("#belly");
const titulovbelly = document.getElementById("titulovbelly");
const ventanabelly = document.getElementById("ventanabelly");
let vabiertabelly = false;

belly.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    titulovbelly.innerText = "bellyache";
    ventanabelly.style.display = "block";
    vabiertabelly = true;
});

document.body.addEventListener('click', (evento) => {
    if(!vabiertabelly) return;
    if(!ventanabelly.contains(evento.target)) {
        ventanabelly.style.display = "none";
        vabiertabelly = false;
    }
});

/* maneskin */

const ventanama = document.getElementById("ventanama");
const tituloVentanama = document.getElementById("tituloVentanama");
let ventanabiertama = false;

dos.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    tituloVentanama.innerText = "Teatro d'ira";
    ventanama.style.display = "block";
    ventanabiertama = true;
});

document.body.addEventListener('click', (evento) => {
    if(!ventanabiertama) return;
    if(!ventanama.contains(evento.target)) {
        ventanama.style.display = "none";
        ventanabiertama = false;
    }
});

const vent = document.querySelector("#vent");
const titulovvent = document.getElementById("titulovvent");
const ventanavent = document.getElementById("ventanavent");
let vabiertavent = false;

vent.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    titulovvent.innerText = "vent'anni";
    ventanavent.style.display = "block";
    vabiertavent = true;
});

document.body.addEventListener('click', (evento) => {
    if(!vabiertavent) return;
    if(!ventanavent.contains(evento.target)) {
        ventanavent.style.display = "none";
        vabiertavent = false;
    }
});


/* solene */

const ventanaso = document.getElementById("ventanaso");
const tituloVentanaso = document.getElementById("tituloVentanaso");
let ventanabiertaso = false;

tres.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    tituloVentanaso.innerText = "Book of shadows";
    ventanaso.style.display = "block";
    ventanabiertaso = true;
});

document.body.addEventListener('click', (evento) => {
    if(!ventanabiertaso) return;
    if(!ventanaso.contains(evento.target)) {
        ventanaso.style.display = "none";
        ventanabiertaso = false;
    }
});

const feed = document.querySelector("#feed");
const titulovfeed = document.getElementById("titulovfeed");
const ventanafeed = document.getElementById("ventanafeed");
let vabiertafeed = false;

feed.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    titulovfeed.innerText = "feed your soul";
    ventanafeed.style.display = "block";
    vabiertafeed = true;
});

document.body.addEventListener('click', (evento) => {
    if(!vabiertafeed) return;
    if(!ventanafeed.contains(evento.target)) {
        ventanafeed.style.display = "none";
        vabiertafeed = false;
    }
});

/* maria */

const ventanamaria = document.getElementById("ventanamaria");
const tituloVentanamaria = document.getElementById("tituloVentanamaria");
let ventanabiertamaria = false;

cuatro.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    tituloVentanamaria.innerText = "Animal";
    ventanamaria.style.display = "block";
    ventanabiertamaria = true;
});

document.body.addEventListener('click', (evento) => {
    if(!ventanabiertamaria) return;
    if(!ventanamaria.contains(evento.target)) {
        ventanamaria.style.display = "none";
        ventanabiertamaria = false;
    }
});

const animal = document.querySelector("#animal");
const titulovanimal = document.getElementById("titulovanimal");
const ventananimal = document.getElementById("ventananimal");
let vabiertanimal = false;

animal.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    titulovanimal.innerText = "animal";
    ventananimal.style.display = "block";
    vabiertanimal = true;
});

document.body.addEventListener('click', (evento) => {
    if(!vabiertanimal) return;
    if(!ventananimal.contains(evento.target)) {
        ventananimal.style.display = "none";
        vabiertanimal = false;
    }
});


/* warning */

const ventanawa = document.getElementById("ventanawa");
const tituloVentanawa = document.getElementById("tituloVentanawa");
let ventanabiertawa = false;

cinco.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    tituloVentanawa.innerText = "Queen of the murder scene";
    ventanawa.style.display = "block";
    ventanabiertawa = true;
});

document.body.addEventListener('click', (evento) => {
    if(!ventanabiertawa) return;
    if(!ventanawa.contains(evento.target)) {
        ventanawa.style.display = "none";
        ventanabiertawa = false;
    }
});

const dust = document.querySelector("#dust");
const titulovdust = document.getElementById("titulovdust");
const ventanadust = document.getElementById("ventanadust");
let vabiertadust = false;

dust.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    titulovdust.innerText = "dust to dust";
    ventanadust.style.display = "block";
    vabiertadust = true;
});

document.body.addEventListener('click', (evento) => {
    if(!vabiertadust) return;
    if(!ventanadust.contains(evento.target)) {
        ventanadust.style.display = "none";
        vabiertadust = false;
    }
});