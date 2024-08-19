
// Configuración del crucigrama
const crucigrama = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '']
];

// Crear la grilla de inputs
const container = document.getElementById('crucigrama');
crucigrama.forEach((fila, i) => {
    fila.forEach((celda, j) => {
        const input = document.createElement('input');
        input.setAttribute('maxlength', 1);
        container.appendChild(input);
    });
});

function checkAnswers() {
    // Aquí puedes agregar la lógica para verificar las respuestas
    alert("Verificando respuestas...");
}

function resetGame() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
}
