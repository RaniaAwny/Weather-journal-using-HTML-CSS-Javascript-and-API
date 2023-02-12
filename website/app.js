/* Global Variables */
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const key = "&appid=de224e4bdbf6e7f5ea4eae4521818d95&units=imperial";

//Adding Event Listener to add function to the excisting DOM element
document.getElementById("generate").addEventListener("click", (e) => {
  const zip = document.getElementById("zip").value;
  const content = document.getElementById("feelings").value;
  if (zip.length === 0) {
    alert("Enter zip code here");
  } else {
    getWeather(baseUrl, zip, key)
      .then((data) => {
        console.log(data);
        postData("/all", {
          data: newDate,
          temp: data.main.temp,
          content: content,
        });
      })
      .then((data) => {
        updateUI();
      });
  }
});
// function called by event listener
async function getWeather(baseUrl, zip, key) {
  let res = await fetch(baseUrl + zip + key);
  try {
    return (data = await res.json());
  } catch (error) {
    console.log("error", error);
  }
}

// Function to Get web API Data
// Function to post Data
async function postData(url = "", data = {}) {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match Content-Type header
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}

// Function to Get project Data
async function updateUI() {
  const res = await fetch("/getWeather");
  try {
    const allD = await res.json();
    document.getElementById("date").innerHTML = `Date : ${allD.data}`;
    document.getElementById("temp").innerHTML = `Temprature : ${allD.temp}`;
    document.getElementById(
      "content"
    ).innerHTML = `My feeling : ${allD.content}`;
  } catch (error) {
    console.log("error", error);
  }
}
