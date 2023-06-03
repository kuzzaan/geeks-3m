const cityName = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const cloud = document.querySelector(".cloud");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weatherIcon");

const apiKey = "e417df62e04d3b1b111abeab19cea714";

const citySearch = () => {
  const cityNameValue = document.querySelector(".cityNameValue").value;
  console.log(cityNameValue);

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${apiKey}`
  )
    .then((data) => data.json())
    .then((json) => {
      console.log(json);
      cityName.textContent = json.name;
      temp.textContent = Math.round(json?.main?.temp - 273) + "°C";
      cloud.textContent = `Облачность: ${json?.clouds?.all}%`;
      wind.textContent = `Скорость ветра: ${json?.wind?.speed} м/с`;

      const temperature = json?.main?.temp - 273;
      switch (true) {
        case temperature < 10:
          weatherIcon.setAttribute("src", "icon/snowflake.png");
          weatherIcon.setAttribute("alt", "Холодно");
          break;
        case temperature < 30:
          weatherIcon.setAttribute("src", "icon/cloudy.png");
          weatherIcon.setAttribute("alt", "Нормально");
          break;
        case temperature > 30:
          weatherIcon.setAttribute("src", "icon/sun.png");
          weatherIcon.setAttribute("alt", "Жарко");
          break;
        default:
      }
    });
};

const cityNameInput = document.querySelector(".cityNameValue");
cityNameInput.addEventListener("input", citySearch);
