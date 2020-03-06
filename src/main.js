$(document).ready(function() {

  $("form").submit(function(event) {
    let name = $("input#name").val();
    let userAge = $("input#userAge").val();
    let gender = $("select#gender").val();
    let planets = [];
    $("input:checkbox[name=planets]:checked").each(function() {
      let planet = $(this).val();
      planets.push(planet);
    });
    
    console.log(name, userAge, gender, planets);
    event.preventDefault();
  });

});