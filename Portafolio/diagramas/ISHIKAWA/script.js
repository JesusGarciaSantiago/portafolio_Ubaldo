function generarDiagrama() {
    const problema = document.getElementById('problema').value;
    const categorias = [
        document.getElementById('categoria1').value,
        document.getElementById('categoria2').value,
        document.getElementById('categoria3').value,
        document.getElementById('categoria4').value,
        document.getElementById('categoria5').value,
        document.getElementById('categoria6').value
    ];

    if (problema && categorias.every(c => c !== '')) {
        // Redirige a la página de diagrama con los datos en la URL
        const url = `../ISHIKAWA/IDiagrama/Ishikawa.html?problema=${encodeURIComponent(problema)}&categoria1=${encodeURIComponent(categorias[0])}&categoria2=${encodeURIComponent(categorias[1])}&categoria3=${encodeURIComponent(categorias[2])}&categoria4=${encodeURIComponent(categorias[3])}&categoria5=${encodeURIComponent(categorias[4])}&categoria6=${encodeURIComponent(categorias[5])}`;
        window.location.href = url;
    } else {
        alert('Por favor, completa todos los campos.');
    }
}
