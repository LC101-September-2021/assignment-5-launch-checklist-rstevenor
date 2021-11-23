window.addEventListener("load", function() {
    let document = window.document
    let pilot = document.querySelector("input[name=pilotName]").value; 
    let copilot= document.querySelector("input[name=copilotName]").value; 
    let fuelLevel= document.querySelector("input[name=fuelLevel]"); 
    let cargoLevel= document.querySelector("input[name=cargoMass]").value;
    let list = document.getElementById("faultyItems")
    
    
    

// Handles all user input data.
    
    
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
       
    
        

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