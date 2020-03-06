import { Person } from './person';
// import { Planet } from './planet';
import './styles.css';

// const planetPercentages = {
//   mercury: .24,
//   venus: .62,
//   mars: 1.88,
//   jupiter: 11.86
// }

// let planets = [];

$(document).ready(function() {

  $("form").submit(function(event) {
    const name = $("input#name").val();
    const userAge = $("input#userAge").val();
    const gender = $("select#gender").val();
    let planetsChecked = [];
    $("input:checkbox[name=planets]:checked").each(function() {
      let planet = $(this).val();
      planetsChecked.push(planet);
    });
    
    const user = new Person(name, userAge, gender);
    const lifeExpectancy = user.earthLifeExpectancy();

    // if (planets.includes('mercury')) { 
    //   const mercury = new Planet('Mercury', .24, userAge, lifeExpectancy);
    //   planetArray.push(mercury);
    //   console.log(mercury);
    //   console.log(planetArray);
    // }


    // planets.forEach(function(planet) {
    //   const planetPercentage = planetPercentages[planet];
    //   let planetObj = new Planet(planet, planetPercentage, userAge, lifeExpectancy); 
    //   console.log(planetObj);
    // });

    console.log(user);
    console.log(lifeExpectancy);
    console.log(planetsChecked);
    event.preventDefault();
  });

});