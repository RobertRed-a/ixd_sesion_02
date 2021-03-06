var dondeEstas;

if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}

var laHora = new Date().getHours();

var elSaludo;

if (5 < laHora && laHora < 12) {
    elSaludo = "Buenos días. ";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Buenas tardes. ";
} else {
    elSaludo = "Buenas noches. ";
}

var elEncabezado = document.querySelector("header");

var loPrincipal = document.querySelector("main");

var lorenIpsum = ["lentes","un ipad","lapices","una croquera","un escritorio"];

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("index.html", "mi trabajo").parent("vinculos");
    createA("page.html", "mi casa").parent("vinculos");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}

function portada() {
    createSpan("Estás en mi trabajo.").parent("title");
    createElement('p','Y yo uso  '+random(lorenIpsum)+' para trabajar dia a dia.').parent(loPrincipal);
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#000000");
}

function pagina() {
    createSpan("Estás en mi casa.").parent("title");
    createElement('p','Y yo uso '+random(lorenIpsum)+' en mi casa.').parent(loPrincipal);
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#000000");
}
