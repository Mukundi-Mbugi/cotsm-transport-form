const form = document.querySelector('.form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let estate = document.querySelector('#estate').value;
    let stage = document.querySelector('#stage').value;
    console.log(name, estate, stage);
})

//get Location

const showPosition = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
}
const showError = (error) => {
    console.log(error);
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
}
