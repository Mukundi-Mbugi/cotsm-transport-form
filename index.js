//get Location

const showPosition = (position) => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  const form = document.querySelector(".form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let estate = document.querySelector("#estate").value;
    let stage = document.querySelector("#stage").value;

   //POST FORM DATA

  fetch("https://cotsm-transport-form.herokuapp.com/members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      estate: estate,
      nearest_stage: stage,
      latitude: latitude,
      longitude: longitude,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  });

  
};
const showError = (error) => {
  alert("Geolocation is not supported by this browser.");
};
