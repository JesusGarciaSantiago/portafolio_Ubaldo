function obtenerParametrosURL() {
    const params = new URLSearchParams(window.location.search);
    const data = {};
    params.forEach((value, key) => {
        data[key] = value;
    });
    return data;
}

function generarDiagramaPareto(causas, importancias) {
    // Ordenar causas por importancia (descendente)
    const sortedData = causas.map((causa, index) => ({
        causa,
        importancia: importancias[index]
    })).sort((a, b) => b.importancia - a.importancia);

    const sortedCausas = sortedData.map(item => item.causa);
    const sortedImportancias = sortedData.map(item => item.importancia);

    // Calcular porcentajes acumulativos
    const total = sortedImportancias.reduce((acc, val) => acc + val, 0);
    let acumulativo = 0;
    const porcentajesAcumulativos = sortedImportancias.map(imp => {
        acumulativo += imp;
        return (acumulativo / total) * 100;
    });

    const ctx = document.getElementById('paretoChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedCausas,
            datasets: [
                {
                    label: 'Importancia',
                    data: sortedImportancias,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Porcentaje Acumulativo',
                    data: porcentajesAcumulativos,
                    type: 'line',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    fill: false,
                    yAxisID: 'y-axis-2'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        position: 'left',
                        ticks: {
                            beginAtZero: true
                        }
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        position: 'right',
                        ticks: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                ]
            }
        }
    });
}

// Leer datos de la URL y generar el diagrama
const data = obtenerParametrosURL();
const causas = [
    data['causa1'], data['causa2'], data['causa3'], data['causa4'],
    data['causa5'], data['causa6'], data['causa7'], data['causa8']
];
const importancias = [
    parseInt(data['importance1']), parseInt(data['importance2']), parseInt(data['importance3']),
    parseInt(data['importance4']), parseInt(data['importance5']), parseInt(data['importance6']),
    parseInt(data['importance7']), parseInt(data['importance8'])
];

generarDiagramaPareto(causas, importancias);
