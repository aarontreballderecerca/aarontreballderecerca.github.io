// Valores de los ejes X e Y
const years = ['2017', '2018', '2019', '2020',    '2021',   '2022',  ];
let valuesY = [0.2177, 0.2477, 0.2394 , 0.2298,    0.2816,    0.3350,  ];

// Obtener el contexto del lienzo de gráfica
const ctx = document.getElementById('barChart').getContext('2d');

// Crear la gráfica de barras con etiquetas de valores
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: years,
        datasets: [{
            label: 'Precio elec. €/kWh',
            data: valuesY,
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Precio elec. €/kWh'
                },
                ticks: {
                    min: 0,
                    max: 0.35,
                    stepSize: 0.05
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Años'
                }
            }
        },
        plugins: {
            legend: {
                display: false // Ocultar la leyenda
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                formatter: function(value) {
                    return value.toFixed(2); // Mostrar dos decimales en las etiquetas de valores
                },
                color: 'black'
            }
        }
    }
});
