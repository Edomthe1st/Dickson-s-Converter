/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const displayedNum = document.getElementById("display-num")
const paraOne = document.getElementById("para-1")
const paraTwo = document.getElementById("para-2")
const paraThree = document.getElementById("para-3")

function convert(){
    let solution = displayedNum.value;
    let lengthSolOne = solution * 3.281
    let lengthsolTwo = solution / 3.281
    let dispParaOne = `${solution} Meters =  ${lengthSolOne.toFixed(3)} Feets | ${solution} Feets = ${lengthsolTwo.toFixed(3)} Meters`
    paraOne.textContent = dispParaOne
    let volSolOne = solution * 0.264
    let volSolTwo = solution / 0.264
    let dispParaTwo = `${solution} Liters =  ${volSolOne.toFixed(3)} Gallons | ${solution} Gallons = ${volSolTwo.toFixed(3)} Liters`
    paraTwo.textContent = dispParaTwo
    let massSolOne = solution * 2.204 
    let massSolTwo = solution / 2.204 
    let dispParaThree = `${solution} Kilograms =  ${massSolOne.toFixed(3)} Pounds | ${solution} Pounds = ${massSolTwo.toFixed(3)} Kilograms`
    paraThree.textContent = dispParaThree
   
}  