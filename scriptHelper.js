// Write your helper functions here!
require('isomorphic-fetch');

//Adds planetary details to missionTarget.
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let missionTarget = document.getElementById("missionTarget")
   
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
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

 // Validates and utilizes user input data to determine shuttle readiness.
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let fieldLabels = [pilot, copilot, fuelLevel, cargoLevel]
    let validInputs = {
        pilot: "Not a Number",
        copilot: "Not a Number",
        fuelLevel: "Is a Number",
        cargoLevel: "Is a Number"
    }
    let validInputsKey = ['pilot', 'copilot', 'fuelLevel', 'cargoLevel']

    // input validation
    for (i=0; i< fieldLabels.length; i++){
        let key = validInputsKey[i]
        let validated = validateInput(fieldLabels[i].value)
        if (validated === "Empty"){
            // alert("All fields are required!");
            list.style.visibility = "hidden";
            event.preventDefault();
            break;
        }else if (validated !== validInputs[key]){
            // alert("Make sure to enter valid information for each field!");
            list.style.visibility = "hidden";
            event.preventDefault();
            break;        
        }
    }
    
    let launchStatus = document.getElementById("launchStatus");
    let pilotName = document.getElementById("pilotStatus"); 
    let copilotName = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById( "cargoStatus");

    list.style.visibility = "visible";

    let fuel = Number(fuelLevel.value);
    let cargo = Number(cargoLevel.value);

    pilotName.innerHTML = `Pilot ${pilot.value} is ready for launch`
    copilotName.innerHTML = `Co-pilot ${copilot.value} is ready for launch`

    if (fuel < 10000 || cargo > 10000){
        launchStatus.style.color = "rgb(199, 37, 78)"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
    } else {
        launchStatus.style.color = "rgb(65, 159, 106)"
        launchStatus.innerHTML = "Shuttle Ready for Launch"
    }

    if (fuel < 10000){
        fuelStatus.innerHTML = "Fuel level too low for launch."
    } else{
            fuelStatus.innerHTML = "Fuel level high enough for launch"
    }
    if (cargo > 10000){
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"    
    } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
    }


    event.preventDefault()
}

// retrieve planet list.
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json()
    });

    return planetsReturned;
}

// choose a number between 1 and 6
function pickPlanet(planets) {
    let selection = Math.floor((Math.random() * 6) + 1);

    return planets[selection]
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
