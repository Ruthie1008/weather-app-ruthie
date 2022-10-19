let li = document.querySelector("li");
let now = new Date();
now.getMinutes(); // 0,1,2, 12
now.getHours(); //1, 2, 3, 4
now.getDate(); //1, 2, 3, 4
now.getDay(); // 0, 1, 2
now.getMonth(); // 0, 1, 2
now.getFullYear(); // 2021

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"];
let day = days[now.getDay()];

let hours = now.getHours();
let minutes = now.getMinutes();

li.innerHTML = `${day}, ${hours}:${minutes}`;

let clickme = document.querySelector("form");
console.log(clickme);

function citysearch(event) {
  event.preventDefault();
  let newName = document.querySelector("#geolocation").value;
  let newline = document.querySelector("h1#weather");
  console.log(newName);
  newline.innerHTML = `It is 18° in ${newName} today`;
}
clickme.addEventListener("submit", citysearch);

function handlePosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(handlePosition);

let apiKey = "b1a8336ff1e05b64da5625e4158fbea3";

let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=38.97&lon=-92.30&units=imperial";

function showTemp(response) {
  console.log(response);
  console.log(response.data.main.temp);
  let weatherDiv = document.querySelector("#weather");
  let temperature = Math.round(response.data.main.temp);
  weatherDiv.innerHTML = `It is ${temperature} degrees, in ${response.data.name}`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
