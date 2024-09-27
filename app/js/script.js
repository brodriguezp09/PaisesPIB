let paisesPIB = [
    { nombre: "Alemania", pib: 3860 },
    { nombre: "Japón", pib: 4870 },
    { nombre: "Brasil", pib: 2050 },
    { nombre: "Canadá", pib: 1800 },
    { nombre: "México", pib: 1220 },
    { nombre: "China", pib: 14140 },
    { nombre: "India", pib: 2870 },
    { nombre: "Francia", pib: 2770 },
    { nombre: "Reino Unido", pib: 2820 },
    { nombre: "Estados Unidos", pib: 21440 }
];

let paisesImpresos = [];

function generarTabla(pais) {
    const displayPaises = document.getElementById('DisplayPaises');

    const p = document.createElement('p');

    const divNombre = document.createElement('span');
    divNombre.textContent = pais.nombre + "........................";
    p.appendChild(divNombre);

    const divPIB = document.createElement('span');
    divPIB.textContent = pais.pib;
    divPIB.classList.add('pib');
    p.appendChild(divPIB);

    displayPaises.appendChild(p);
}

function agregarPais(){
    

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function eliminarPais() {
        if (paisesPIB.length > 0) {
            let indiceAleatorio = getRandomInt(paisesPIB.length);
            let paisAleatorio = paisesPIB[indiceAleatorio];

            generarTabla(paisAleatorio);
            paisesImpresos.push(paisesPIB[indiceAleatorio])
            paisesPIB.splice(indiceAleatorio, 1); 
        } else {
            alert("NO HAY SUFICIENTES PAISES");
        }
    }

    eliminarPais();
}

document.getElementById('add-country').onclick = agregarPais;

function doblarPIB(){
    paisesImpresos.forEach(pais => {
        pais.pib = pais.pib /2;
    });
    
    const spans = document.querySelectorAll('.pib');
    spans.forEach((span, i) => {
        if (!paisesImpresos[i] <= 0){
            span.textContent = paisesImpresos[i].pib;
        } else{
            span.textContent='0';
        }
    });
}

document.getElementById('double').onclick = doblarPIB;

function mostrarMillonarios(){

    const displayPaises = document.getElementById('DisplayPaises');
    displayPaises.innerHTML = "<h2><strong>País</strong> PIB</h2>";

    let millonarios = paisesImpresos.filter(pais => pais.pib > 1500);


    millonarios.forEach(pais => generarTabla(pais));
}

document.getElementById('show-millionaires').onclick = mostrarMillonarios;

function ordenarDinero(){

    const displayPaises = document.getElementById('DisplayPaises');
    displayPaises.innerHTML = "<h2><strong>País</strong> PIB</h2>";

    let ordenados = paisesImpresos.sort((a,b) => b.pib - a.pib);
    
    ordenados.forEach(pais => generarTabla(pais));
}

document.getElementById('sort-PIB').onclick = ordenarDinero;

function ordenarAZ(){

    const displayPaises = document.getElementById('DisplayPaises');
    displayPaises.innerHTML = "<h2><strong>País</strong> PIB</h2>";

    let ordenados = paisesImpresos.sort((a,b) => a.nombre.localeCompare(b.nombre));
    
    ordenados.forEach(pais => generarTabla(pais));
}

document.getElementById('sort-AZ').onclick = ordenarAZ;
