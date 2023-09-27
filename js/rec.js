document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateConsumption);

    const appliances = {
        Nevera: 100,
        tv: 50,
        Lavadora: 500,
        Microondas: 800,
        Tostadora: 700,
        "Cafetera": 900,
        "Secador-de-pelo": 1200,
        Lavavajillas: 1500,
        Plancha: 1000,
        "Aspiradora": 600,
        Ordenador: 150,
        Lámpara: 40,
        Horno: 2000,
        Licuadora: 400,
        Ventilador: 75,
        Router: 10,
        "Videoconsola": 250,
        Calefactor: 1500,
        "Hervidor-de-agua": 1500,
        Monitor: 30,
    };

    const applianceSelect = document.getElementById("appliance");
    applianceSelect.addEventListener("change", updatePowerField);

    function updatePowerField() {
        const selectedAppliance = applianceSelect.value;
        const powerInput = document.getElementById("power");
        powerInput.value = appliances[selectedAppliance];
    }

    function calculateConsumption() {
        const appliance = document.getElementById("appliance").value;
        const power = parseFloat(document.getElementById("power").value);
        const hours = parseFloat(document.getElementById("hours").value);
        const price = parseFloat(document.getElementById("price").value);

        const consumption = (power * hours) / 1000; // Consumo en kWh
        const cost = consumption * price; // Costo en la moneda local

        const resultElement = document.getElementById("result");
        resultElement.style.display = "block";
        const consumptionElement = document.getElementById("consumption");
        const costElement = document.getElementById("cost");

        consumptionElement.innerHTML = `Consumo para ${appliance}: ${consumption.toFixed(2)} kWh`;
        costElement.innerHTML = `Costo para ${appliance}: ${cost.toFixed(2)} moneda local`;
    }
});
