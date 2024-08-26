function goBack() {
    window.location.href="../diagramas.html";
}

function generateDiagram() {
    const whiteHat = document.getElementById('whiteHat').value;
    const redHat = document.getElementById('redHat').value;
    const blackHat = document.getElementById('blackHat').value;
    const yellowHat = document.getElementById('yellowHat').value;
    const greenHat = document.getElementById('greenHat').value;
    const blueHat = document.getElementById('blueHat').value;

    if (whiteHat && redHat && blackHat && yellowHat && greenHat && blueHat) {
        // Guardar los datos en localStorage
        localStorage.setItem('whiteHat', whiteHat);
        localStorage.setItem('redHat', redHat);
        localStorage.setItem('blackHat', blackHat);
        localStorage.setItem('yellowHat', yellowHat);
        localStorage.setItem('greenHat', greenHat);
        localStorage.setItem('blueHat', blueHat);

        // Redirigir a la nueva ruta (diagram.html) dentro de la misma ventana
        window.location.href = '../SOMBRERO/FSombrero/DSombrero.html';
    } else {
        alert('Por favor, completa todos los campos antes de generar el diagrama.');
    }
}
