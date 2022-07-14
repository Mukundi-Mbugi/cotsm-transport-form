//get Location
let coordinates = [];
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(function (position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    coordinates.push({
      latitude: latitude,
      longitude: longitude,
    });
  });

const form = document.querySelector("#form");
let userName = document.querySelector("#name").value;
let estate = document.querySelector("#estate").value;
let stage = document.querySelector("#stage").value;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //POST FORM DATA
  console.log(coordinates[0].latitude);

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
  form.reset();
});
