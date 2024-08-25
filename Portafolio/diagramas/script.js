function goBack() {
    window.location.href = '../index.html'; // Reemplaza 'tu-archivo.html' con la ruta del archivo deseado
}

function selectDiagram(diagramType) {
    let pageUrl = '';

    switch (diagramType) {
        case 'FODA':
            pageUrl = '../diagramas/FODA/f1.html'; // Reemplaza con la ruta del archivo para el diagrama FODA
            break;
        case 'CATWDA':
            pageUrl = '../diagramas/CATWDA/f2.html'; // Reemplaza con la ruta del archivo para el diagrama CATWDA
            break;
        case 'ISHIKAWA':
            pageUrl = 'ishikawa.html'; // Reemplaza con la ruta del archivo para el diagrama ISHIKAWA
            break;
        case 'DE PARETO':
            pageUrl = 'pareto.html'; // Reemplaza con la ruta del archivo para el diagrama DE PARETO
            break;
        case 'SOMBRERO PARA PENSAR':
            pageUrl = 'sombrero.html'; // Reemplaza con la ruta del archivo para el diagrama SOMBRERO PARA PENSAR
            break;
        default:
            alert('Diagrama no disponible.');
            return;
    }

    window.location.href = pageUrl;
}
