/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input")
const btnEl = document.getElementById("btn-convert")

const lengthEl = document.getElementById("length-box")
const volumeEl = document.getElementById("volume-box")
const massEl =   document.getElementById("mass-box")

const metricToImperialConstants = [3.281, 0.264, 2.204]
const imperialTometricConstants = [.304, 3.787, 0.453]
let imperialArray = []
let metricArray = []


btnEl.addEventListener("click", function(){
    const metricNum = parseInt(inputEl.value) 
    metricToImperialConvertor(metricNum)
    imperialToMetricConvertor(metricNum)
    renderLengthBox(metricNum)
    renderVolumeBox(metricNum)
    renderMassBox(metricNum)
} )

function metricToImperialConvertor(number){
    for (let i = 0; i < metricToImperialConstants.length; i++){
        let imperialConversion = number * metricToImperialConstants[i]
        imperialConversion = imperialConversion.toFixed(3)
        imperialArray.push(imperialConversion)
    }
}   

function imperialToMetricConvertor(number){
    for (let i = 0; i < metricToImperialConstants.length; i++){
        let metricConversion = number * imperialTometricConstants[i]
        metricConversion = metricConversion.toFixed(3)
        metricArray.push(metricConversion)
    }
}   

function renderLengthBox(metricNum){
    lengthEl.innerHTML = `<p class="conversion-style"> ${metricNum} meters = ${imperialArray[0]} feet | ${metricNum} feet = ${metricArray[0]} meters </p>`
}    

 function renderVolumeBox(metricNum){
    volumeEl.innerHTML = `<p class="conversion-style"> ${metricNum} liters = ${imperialArray[1]} gallons | ${metricNum} gallons = ${metricArray[1]} liters </p>`
}    

function renderMassBox(metricNum){
    massEl.innerHTML = `<p class="conversion-style"> ${metricNum} killos = ${imperialArray[2]} pounds | ${metricNum} pounds = ${metricArray[2]} killos </p>`
}    



    
    
    
    