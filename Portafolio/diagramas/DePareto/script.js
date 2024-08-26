function goBack() {
    window.location.href='../diagramas.html';
}

function submitForm(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const form = document.getElementById('paretoForm');
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Crear la URL con los parámetros de consulta
    const params = new URLSearchParams(data).toString();
    window.location.href = `../DePareto/PDiagrama/DPareto.html?${params}`;
}

function blockColumn(selected) {
    const columnValue = selected.value; // Valor de la columna seleccionada
    const columnInputs = document.querySelectorAll(`input[type="radio"][value="${columnValue}"]`); // Todos los inputs de la columna seleccionada

    // Verificar si hay algún radio button seleccionado en la columna
    const isAnySelectedInColumn = Array.from(columnInputs).some(input => input.checked);

    // Si no hay ningún punto seleccionado en la columna, desbloquear todos los inputs de la columna
    if (!isAnySelectedInColumn) {
        columnInputs.forEach(input => input.disabled = false);
    } else {
        // Si hay un punto seleccionado en la columna, bloquear los demás inputs en la columna
        columnInputs.forEach(input => {
            if (!input.checked) {
                input.disabled = true; // Bloquear otros inputs en la columna
            }
        });
    }
}
