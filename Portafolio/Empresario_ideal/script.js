function volver() {
    window.location.href = "../index.html";
}

function mostrarDescripcion(parte) {
    var descripcion = document.getElementById('descripcion');
    
    switch(parte) {
        case 'cabeza':
            descripcion.innerHTML = "<strong>Cabeza:</strong> El empresario ideal debe ser estratega y visionario, utilizando su intelecto para planificar el futuro de su negocio, identificar oportunidades y resolver problemas complejos.";
            break;
        case 'corazon':
            descripcion.innerHTML = "<strong>Corazón:</strong> La pasión y la empatía son esenciales. Un empresario ideal no solo busca el éxito económico, sino también crear un impacto positivo en su equipo, clientes y comunidad.";
            break;
        case 'brazoIzq':
            descripcion.innerHTML = "<strong>Brazo Izquierdo:</strong> Representa la capacidad de liderazgo. Un empresario debe ser capaz de dirigir con mano firme pero justa, motivando a su equipo a alcanzar sus metas.";
            break;
        case 'brazoDer':
            descripcion.innerHTML = "<strong>Brazo Derecho:</strong> Simboliza la acción y la ejecución. No basta con planear, el empresario ideal debe ser capaz de tomar decisiones rápidas y ejecutar estrategias con precisión.";
            break;
        case 'pierna':
            descripcion.innerHTML = "<strong>Piernas:</strong> La perseverancia y estabilidad. Para mantenerse en pie en tiempos difíciles, un empresario ideal necesita ser resiliente y mantener una base sólida en sus principios y estrategias.";
            break;
        default:
            descripcion.innerHTML = "";
            break;
    }

    descripcion.classList.add('visible');
}
