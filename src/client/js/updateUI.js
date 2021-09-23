// creates a template of html with data from APIs dynamically
function updateUI(data) {

    // variables for displaying the results
    const results = document.querySelector("#section-results");
    const destination = document.querySelector(".title");
    const cityImage = document.querySelector(".display-city");
    const weatherWrapper = document.querySelector(".display-weather");

    // insert the trip overview
    destination.innerHTML = `
    Your Upcoming Trip To <strong>${data.cityName}, ${data.countryName}</strong>`

    // insert the city image
    cityImage.innerHTML = `<img src="${data.img}" alt="${data.cityName} image">`

    // insert the weather info and icons
    weatherWrapper.innerHTML = `
    <p>🛫 Trip Date: ${data.date}</p>
    <p>⛅ Current Weather in ${data.cityName}:</p>
    <div class="resultCurrent">
        <img src= "https://www.weatherbit.io/static/img/icons/${data.icon}.png" alt="weather-icon">
        <ul>
            <li>${data.weather}</li>
            <li>${data.temp} &deg;C</li>
        </ul>
    </div>
    `

    results.style.display = 'block';
}

export { updateUI }