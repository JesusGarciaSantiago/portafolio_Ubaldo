function volver() {
    window.history.back();
}

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);

    // Recuperar cada valor usando el método get
    return {
        problematica: params.get('problematica'),
        fortalezas: [params.get('fortaleza1'), params.get('fortaleza2')],
        debilidades: [params.get('debilidad1'), params.get('debilidad2')],
        amenazas: [params.get('amenaza1'), params.get('amenaza2')],
        oportunidades: [params.get('oportunidad1'), params.get('oportunidad2')]
    };
}

function generarDiagramaFODA() {
    const data = getQueryParams();
    const container = document.getElementById('diagrama-container');

    // Crear estructura HTML para el diagrama FODA
    const html = `
        <h2>${data.problematica || 'Sin Problematica'}</h2>
        <div class="foda-grid">
            <div class="foda-item">
                <h3>Fortalezas</h3>
                <ul>
                    ${data.fortalezas.map(f => `<li>${f || ''}</li>`).join('')}
                </ul>
            </div>
            <div class="foda-item">
                <h3>Debilidades</h3>
                <ul>
                    ${data.debilidades.map(d => `<li>${d || ''}</li>`).join('')}
                </ul>
            </div>
            <div class="foda-item">
                <h3>Amenazas</h3>
                <ul>
                    ${data.amenazas.map(a => `<li>${a || ''}</li>`).join('')}
                </ul>
            </div>
            <div class="foda-item">
                <h3>Oportunidades</h3>
                <ul>
                    ${data.oportunidades.map(o => `<li>${o || ''}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    // Insertar el HTML generado en el contenedor
    container.innerHTML = html;
}

// Llamar a la función para generar el diagrama al cargar la página
window.onload = generarDiagramaFODA;
