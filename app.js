//PRIMERO para ocultar o mostrar el menu
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



