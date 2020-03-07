import { Person } from './person';
import { Planet } from './planet';
import './styles.css';

/* Globally available reference variable */ 
const planetPercentages = {
  mercury: .24,
  venus: .62,
  mars: 1.88,
  jupiter: 11.86
};

let planetsPicked = [];

$(document).ready(function() {

  $("form").submit(function(event) {
    /* Gather input from form fields */
    const name = $("input#name").val();
    const userAge = $("input#userAge").val();
    const gender = $("select#gender").val();
    const checkedPlanet = $("input:radio[name=planet]:checked").val();
    /* Check for duplicate planet input, and ignore planets that have already been submitted */
    if (planetsPicked.includes(checkedPlanet) === false) {
      planetsPicked.push(checkedPlanet);
    
      /* Create Person object using inputted data */ 
      const user = new Person(name, userAge, gender);
      const earthLifeExpectancy = user.earthLifeExpectancy();

      /* Create Planet object */
      const checkedPlanetPercentage = planetPercentages[checkedPlanet];
      const planet = new Planet(checkedPlanet, checkedPlanetPercentage, userAge, earthLifeExpectancy);

      /* Uppercase the planet name for display */
      const planetDisplayName = checkedPlanet.replace(/^\w/, c => c.toUpperCase());

      /* Return the calculated data back to the user */
      $("#id-section").hide();
      $("#results-div").append(`<div class="field results-text">You are <strong>${planet.calculateAge()}</strong> years old on ${planetDisplayName}! 
    </div>`);
      $("#results-div").show(); 
    }

    event.preventDefault();
  });

});