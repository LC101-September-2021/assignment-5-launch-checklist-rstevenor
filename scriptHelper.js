// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

//Checks that values input are not empty and are or are not a number.
function validateInput(testInput) {
    let numberInput = Number(testInput)
    if (testInput === ""){
        return "Empty";
    } else if (isNaN(numberInput)){
        return "Not a Number";
    } else{
        return "Is a Number";
    }
 }

 // checks form fields for blanks and correct information.
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let fieldLabels = [pilot, copilot, fuelLevel, cargoLevel]
    let validInputs = {
        pilot: "Not a Number",
        copilot: "Not a Number",
        fuelLevel: "Is a Number",
        cargoLevel: "Is a Number"
    }
    let validInputsKey = ['pilot', 'copilot', 'fuelLevel', 'cargoLevel']

    for (i=0; i< fieldLabels.length; i++){
        let key = validInputsKey[i]
        let validated = validateInput(fieldLabels[i].value)
        if (validated === "Empty"){
            alert("All fields are required!");
            event.preventDefault();
            break;
        }else if (validated !== validInputs[key]){
            alert("Make sure to enter valid information for each field!");
            event.preventDefault();
            break;
        }
    }

   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
