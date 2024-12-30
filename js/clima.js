const search = document.querySelector(".search input");
const btnsearch = document.querySelector(".search button");
const climaIcon = document.querySelector(".clima-icon");
const error = document.querySelector(".error");



const apikey = "bd7bd58beaa9d29198e4d085a2e2063f";
const apiurl = " https://api.openweathermap.org/data/2.5/weather";
// cargar la localisation cuando abre al app
window.addEventListener("load", () => {
    let long;
    let lati;
    function getWeather(pais) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(posicion => {
                lati = posicion.coords.latitude;
                long = posicion.coords.longitude;

                fetch(apiurl + `?&lon=${long}&lat=${lati}&appid=${apikey}` + `&lang=es&units=metric`)
                    .then(response => response.json())

                    .then(data => {

                        if (data.status = 404) {
                            error.style.display = "block";
                        };

                        document.querySelector(".pais").innerHTML = data.name;
                        document.querySelector(".temperatura").innerHTML = Math.round(data.main.temp) + " °C";
                        document.querySelector(".humedad").innerHTML = data.main.humidity + "%";
                        document.querySelector(".viento").innerHTML = data.wind.speed + " km/h";
                        document.querySelector(".descripcion").innerHTML = data.weather[0].description;

                        if (data.weather[0].main == "Clouds") {
                            climaIcon.src = "image/clima/clouds.png";
                        }
                        else if (data.weather[0].main == "Clear") {
                            climaIcon.src = "image/clima/clear.png";
                        } else if (data.weather[0].main == "Rain") {
                            climaIcon.src = "image/clima/rain.png";
                        }
                        else if (data.weather[0].main == "Drizzle") {
                            climaIcon.src = "image/clima/drizzle.png";
                        } else if (data.weather[0].main == "Mist") {
                            climaIcon.src = "image/clima/mist.png";
                        }
                        else if (data.weather[0].main == "Snow") {
                            climaIcon.src = "images/clima/snow.png";
                        }

                        error.style.display = "none"; //eliminar el mensaje de error
                    })
            });
        } else {
            climaConBtn();
        }

    }
    getWeather();

})

//function para buscar por pais digitado
function climaConBtn(pais) {

    const apiurl2 = " https://api.openweathermap.org/data/2.5/weather";
    fetch(apiurl + `?&appid=${apikey}` + `&lang=es&units=metric&` + `q=${pais}`)

        .then((response) => {
            return response.json();
        })
        .then((data) => {

            if (data.status = 404) {
                error.style.display = "block";
            }
            document.querySelector(".pais").innerHTML = data.name;
            document.querySelector(".temperatura").innerHTML = Math.round(data.main.temp) + " °C";
            document.querySelector(".humedad").innerHTML = data.main.humidity + "%";
            document.querySelector(".viento").innerHTML = data.wind.speed + " km/h";
            document.querySelector(".descripcion").innerHTML = data.weather[0].description;
            if (data.weather[0].main == "Clouds") {
                climaIcon.src = "image/clima/clouds.png";
            }
            else if (data.weather[0].main == "Clear") {
                climaIcon.src = "image/clima/clear.png";
            } else if (data.weather[0].main == "Rain") {
                climaIcon.src = "image/clima/rain.png";
            }
            else if (data.weather[0].main == "Drizzle") {
                climaIcon.src = "image/clima/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                climaIcon.src = "image/clima/mist.png";
            }
            else if (data.weather[0].main == "Snow") {
                climaIcon.src = "image/clima/snow.png";
            }
            error.style.display = "none"; //eliminar el mensaje de error
        })
}

// llamar al button
btnsearch.addEventListener("click", () => {
    if (search.value == "") {
        search.Value = "Ingresa el nombre del país";
    } else {
        climaConBtn(search.value);  //search.value = pais 
        search.value = "";

    }
});









// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3306a17e9cmsh8e00e98e5695493p12f4bcjsn634cd9a9e605',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };


// fetch("https://open-weather13.p.rapidapi.com/city/landon/EN",options)

//    .then (res => res.json())
//    .then (respu => {
//     console.log(respu)
// })