document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const problema = urlParams.get('problema');
    const categorias = [
        urlParams.get('categoria1'),
        urlParams.get('categoria2'),
        urlParams.get('categoria3'),
        urlParams.get('categoria4'),
        urlParams.get('categoria5'),
        urlParams.get('categoria6')
    ];

    // Configuración del canvas y dibujo del diagrama
    const canvas = document.getElementById('ishikawaCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Limpieza del canvas y configuración de estilos
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '16px Segoe UI, Tahoma, Geneva, Verdana, sans-serif';

    // Colores y estilos
    const spineColor = '#333';
    const branchColor = '#007acc';
    const textColor = '#555';
    const problemColor = '#d9534f';
    const circleColor = '#5bc0de';

    // Medir el ancho del texto del problema principal
    const problemaWidth = ctx.measureText(problema).width;

    // Dibuja la línea principal del diagrama (espina central)
    ctx.beginPath();
    ctx.moveTo(100, canvas.height / 2);
    ctx.lineTo(canvas.width - 200, canvas.height / 2);
    ctx.strokeStyle = spineColor;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Dibuja la "cabeza de pez" al final de la espina central y ajusta el tamaño según el texto
    const headRadius = Math.max(30, problemaWidth / 2 + 10); // Radio mínimo de 30 o más según el ancho del texto
    ctx.fillStyle = problemColor;
    ctx.beginPath();
    ctx.arc(canvas.width - 180, canvas.height / 2, headRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.fillText(problema, canvas.width - 180, canvas.height / 2 + 5);

    // Dibuja las "espinas" del diagrama hacia la izquierda y distribuidas cerca del problema central
    const espaciado = (canvas.width - 400) / (categorias.length + 1); // Ajuste para acercar las espinas al problema

    categorias.forEach((categoria, index) => {
        const xInicio = canvas.width - 200 - espaciado * (index + 1); // Puntos de inicio más cerca del problema
        const yInicio = canvas.height / 2;
        const yFinal = (index % 2 === 0) ? yInicio - 100 : yInicio + 100; // Alterna la dirección de las espinas hacia arriba o abajo

        // Medir el ancho del texto de la categoría
        const textWidth = ctx.measureText(categoria).width;

        // Ajustar la posición final para que no se superponga con el texto
        const xFinal = xInicio - 100 - textWidth - 10; // Ajuste adicional de 10px para espacio extra

        // Dibuja las líneas de las espinas
        ctx.beginPath();
        ctx.moveTo(xInicio, yInicio);
        ctx.lineTo(xFinal, yFinal); // Las espinas apuntan hacia la izquierda con ajuste dinámico
        ctx.strokeStyle = branchColor;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Dibuja un círculo al final de cada espina
        ctx.fillStyle = circleColor;
        ctx.beginPath();
        ctx.arc(xFinal, yFinal, 10, 0, Math.PI * 2);
        ctx.fill();

        // Dibuja el texto de la categoría cerca del círculo
        ctx.fillStyle = textColor;
        ctx.textAlign = 'right';
        ctx.fillText(categoria, xFinal - 10, yFinal + 5); // Ajuste para que el texto no se superponga con la línea
    });

    // Dibuja la "cola del pez"
    ctx.beginPath();
    ctx.moveTo(80, canvas.height / 2 - 20);
    ctx.lineTo(30, canvas.height / 2);
    ctx.lineTo(80, canvas.height / 2 + 20);
    ctx.closePath();
    ctx.fillStyle = spineColor;
    ctx.fill();
});
