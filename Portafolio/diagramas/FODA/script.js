function volver() {
    window.history.back();
}

function generarDiagrama() {
    const problematica = document.getElementById('problematica').value;
    const fortaleza1 = document.querySelector('input[name="fortaleza1"]').value;
    const fortaleza2 = document.querySelector('input[name="fortaleza2"]').value;
    const debilidad1 = document.querySelector('input[name="debilidad1"]').value;
    const debilidad2 = document.querySelector('input[name="debilidad2"]').value;
    const amenaza1 = document.querySelector('input[name="amenaza1"]').value;
    const amenaza2 = document.querySelector('input[name="amenaza2"]').value;
    const oportunidad1 = document.querySelector('input[name="oportunidad1"]').value;
    const oportunidad2 = document.querySelector('input[name="oportunidad2"]').value;

    // Crear un objeto con los datos del formulario
    const fodaData = {
        problematica: problematica,
        fortaleza1: fortaleza1,
        fortaleza2: fortaleza2,
        debilidad1: debilidad1,
        debilidad2: debilidad2,
        amenaza1: amenaza1,
        amenaza2: amenaza2,
        oportunidad1: oportunidad1,
        oportunidad2: oportunidad2
    };

    // Convertir el objeto a una cadena de consulta (query string)
    const queryString = new URLSearchParams(fodaData).toString();
    
    // Redirigir a la página de resultados con los datos
    window.location.href = `../FODA/FDiagrama/foda.html?${queryString}`;
}
