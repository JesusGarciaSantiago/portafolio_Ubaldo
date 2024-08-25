function volver() {
    window.history.back();
}

// Función para obtener parámetros de la URL
function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split("&").forEach(param => {
        const [key, value] = param.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, " "));
    });
    return params;
}

// Obtener los datos del formulario desde la URL
const datos = getQueryParams();

const container = document.getElementById('diagramContainer');

const secciones = [
    { key: 'C', nombre: 'Contexto' },
    { key: 'A', nombre: 'Actores' },
    { key: 'T', nombre: 'Transformación' },
    { key: 'W', nombre: 'Cosmovisión' },
    { key: 'D', nombre: 'Donante' },
    { key: 'A', nombre: 'Afectados' }
];

secciones.forEach(seccion => {
    const div = document.createElement('div');
    div.className = `diagram-box section-${seccion.key.toLowerCase()}`;
    div.innerHTML = `<h3>${seccion.nombre} (${seccion.key})</h3>`;
    
    for (let i = 1; i <= 2; i++) {
        const componenteKey = `${seccion.key.toLowerCase()}${i}`;
        const componente = datos[componenteKey];
        if (componente) {
            div.innerHTML += `<p>${componente}</p>`;
        } else {
            div.innerHTML += `<p>Componente ${i}: No proporcionado</p>`;
        }
    }

    container.appendChild(div);
});
