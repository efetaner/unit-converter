

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204
const feetToMeter =  0.304
const gallonToLiter =  3.79
const poundToKilo =  0.453



const convertButton = document.getElementById("convert-button");
const lengthParagraph = document.getElementById("length-paragraph");
const volumeParagraph = document.getElementById("volume-paragraph");
const massParagraph = document.getElementById("mass-paragraph");
const numberInput = document.getElementById("number-input");


      numberInput.addEventListener("keyup", function() {
  let baseValue = numberInput.value 
  lengthParagraph.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters ` 
  volumeParagraph.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters`
  massParagraph.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(3)} kilos` 
})
