
const button = document.querySelector("#btn");

button.addEventListener("click", (e) => {
  e.preventDefault();
  
  let coordinates = [];
  let userName = document.querySelector("#name").value;
  let estate = document.querySelector("#estate").value;
  let stage = document.querySelector("#stage").value;

  //get location
  navigator.geolocation.getCurrentPosition(function (position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    coordinates.push({
      latitude: latitude,
      longitude: longitude,
    });
 

  //POST FORM DATA

  fetch("https://cotsm-transport-form.herokuapp.com/members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userName,
      estate: estate,
      nearest_stage: stage,
      latitude: coordinates[0].latitude,
      longitude: coordinates[0].longitude,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  }, function (error) {
    alert(`${error.message} Please enable location`);
  });

});
