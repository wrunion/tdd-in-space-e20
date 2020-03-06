import { Person } from './person';
import { Planet } from './planet';
import './styles.css';

// const planetPercentages = {
//   mercury: .24,
//   venus: .62,
//   mars: 1.88,
//   jupiter: 11.86
// }

$(document).ready(function() {

  $("form").submit(function(event) {
    const name = $("input#name").val();
    const userAge = $("input#userAge").val();
    const gender = $("select#gender").val();
    let planets = [];
    $("input:checkbox[name=planets]:checked").each(function() {
      let planet = $(this).val();
      planets.push(planet);
    });
    
    const user = new Person(name, userAge, gender);
    const lifeExpectancy = user.earthLifeExpectancy();

    console.log(user);
    console.log(lifeExpectancy);
    event.preventDefault();
  });

});