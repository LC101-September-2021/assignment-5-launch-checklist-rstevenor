window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let pilot = document.querySelector("input[name=pilotName]"); 
    let copilot= document.querySelector("input[name=copilotName]"); 
    let fuelLevel= document.querySelector("input[name=fuelLevel]"); 
    let cargoLevel= document.querySelector("input[name=cargoMass]");
    let list = document.getElementById("faultyItems")
    list.style.visibility = "hidden";
    
    

// Handles all user input data.
    form.addEventListener("submit", (event) => {
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel,event)
        });

// Handles all mission details.
   let listedPlanets; 
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
   }).then(function () {
       let planet = pickPlanet(listedPlanets)
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   })
   
});