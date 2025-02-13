function convertir() {
    let conversionType = document.getElementById("conversionType").value;
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let resultado = 0;

    if (isNaN(inputValue)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa un número válido";
        return;
    }

    switch (conversionType) {
        case "km-m":
            resultado = inputValue * 1000;
            break;
        case "m-cm":
            resultado = inputValue * 100;
            break;
        case "ft-inch":
            resultado = inputValue * 12;
            break;
        case "yard-inch":
            resultado = inputValue * 36;
            break;
        default:
            resultado = "Conversión no válida";
    }

    document.getElementById("resultado").textContent = resultado;
}
