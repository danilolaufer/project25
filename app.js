AOS.init();
function toggleMenu(){
    let dropdown = document.getElementById("dropdownContent");
    dropdown.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.closest('.menu')) {
        let dropdown = document.getElementById("dropdownContent");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcular").addEventListener("click", function () {
        calcularCalorias();
    });
});

function calcularCalorias() {
    let sexo = document.getElementById("sexo").value;
    let edad = parseInt(document.getElementById("edad").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let ejercicio = document.getElementById("ejercicio").value;
    let objetivo = document.getElementById("objetivo").value;

    if (!sexo || !edad || !peso || !altura || ejercicio === "opcion" || objetivo === "opcion") {
        alert("completa todos los campos correctamente.");
        return;
    }

    let tmb;
    if (sexo === "Hombre") {
        tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * edad);
    } else {
        tmb = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * edad);
    }

    let factores = {
        "sedentaria": 1.2,
        "ligera": 1.375,
        "moderada": 1.55,
        "intensa": 1.725,
        "muyintensa": 1.9
    };

    let gastoTotal = tmb * factores[ejercicio];
    let caloriasObjetivo;

    if (objetivo === "aumentar") {
        caloriasObjetivo = gastoTotal + 500; 
    } else if (objetivo === "perder") {
        caloriasObjetivo = gastoTotal - 500; 
    } else {
        caloriasObjetivo = gastoTotal; 
    }
    document.getElementById("tabla-objetivo").textContent = `Tus calorias para: ${objetivo.charAt(0).toUpperCase() + objetivo.slice(1)}`;
    let niveles;
    if (objetivo === "aumentar") {
        niveles = [
            { nivel: "Superávit Ligero", calorias: gastoTotal + 250 },
            { nivel: "Superávit Moderado", calorias: gastoTotal + 500 },
            { nivel: "Superávit Intenso", calorias: gastoTotal + 750 },
        ];
    } else if (objetivo === "perder") {
        niveles = [
            { nivel: "Déficit Ligero", calorias: gastoTotal - 250 },
            { nivel: "Déficit Moderado", calorias: gastoTotal - 500 },
            { nivel: "Déficit Intenso", calorias: gastoTotal - 750 },
        ];
    } else {
        niveles = [
            { nivel: "Mantenimiento", calorias: gastoTotal },
        ];
    }
    let tablaContenido = "";
    niveles.forEach(nivel => {
        tablaContenido += `
            <tr>
                <td>${nivel.nivel}</td>
                <td>${nivel.calorias.toFixed(2)} kcal</td>
            </tr>
        `;
    });
    document.getElementById("tabla-calorias-contenido").innerHTML = tablaContenido;
    document.getElementById("tabla-calorias").style.display = "block";
}

let index = 0;
const slides = document.querySelectorAll(".items");
const totalSlides = slides.length;

function moveSlide(step) {
    index += step;
    
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    document.querySelector(".carrusel").style.transform = `translateX(-${index * 100}%)`;
}








