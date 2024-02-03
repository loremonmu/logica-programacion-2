function convertirTemperatura() {
  let temperatura = parseFloat(document.getElementById("temperatura").value);

  if (isNaN(temperatura)) {
    alert("Error: Por favor ingrese un número válido.");
    return;
  }

  let temperaturaFahrenheit = temperatura * 9 / 5 + 32;
  let temperaturaKelvin = temperatura + 273.15;

  document.getElementById("resultado").innerHTML =
    "Grados Kelvin: " + temperaturaKelvin.toFixed(2) +
    "<br>Grados Fahrenheit: " + temperaturaFahrenheit.toFixed(2);
}