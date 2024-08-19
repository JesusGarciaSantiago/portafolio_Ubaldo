document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container img');
    const modal = document.getElementById('myModal');
    const modalDescription = document.getElementById('modal-description');
    const span = document.getElementsByClassName('close')[0];
    
    images.forEach(image => {
        image.addEventListener('click', () => {
            const description = image.getAttribute('data-description');
            modalDescription.textContent = getDescription(description);
            modal.style.display = 'flex';
        });
    });

    // Cerrar el modal cuando el usuario haga clic en <span> (x)
    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal cuando el usuario haga clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Función para obtener la descripción de la palabra
    function getDescription(word) {
        const descriptions = {
            "Orden": "Orden: Acción de poner algo en su lugar correspondiente.",
            "Puntualidad": "Puntualidad: Calidad de llegar o hacer algo a tiempo.",
            "Limpieza": "Limpieza: Ausencia de suciedad o impurezas.",
            "Responsabilidad": "Responsabilidad: Obligación de responder por algo o alguien.",
            "Deseo de superación": "Deseo de superación: Voluntad de mejorar y alcanzar metas superiores.",
            "Honradez": "Honradez: Cualidad de ser honesto y justo.",
            "Respeto al derecho de los demás": "Respeto al derecho de los demás: Consideración y valoración de los derechos ajenos.",
            "Respeto a la ley y a los reglamentos": "Respeto a la ley y a los reglamentos: Acatamiento de las normas legales establecidas.",
            "Amor al trabajo": "Amor al trabajo: Aprecio y dedicación al trabajo que se realiza.",
            "Afán por el ahorro y la inversión": "Afán por el ahorro y la inversión: Interés en guardar dinero y destinarlo a proyectos productivos."
        };

        return descriptions[word] || "Descripción no disponible.";
    }
});
