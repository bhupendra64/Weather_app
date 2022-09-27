let inp = document.getElementById("input");
let btn = document.getElementById("btn");
let tempe = document.querySelector(".temperature__max");
let city = document.querySelector(".city");
let img = document.querySelector("img");
let hum = document.querySelector(".info__value");
let preci = document.querySelector(".info__value2");
let lastup = document.querySelector(".info__value1");
let d = document.querySelector(".container__inner");

btn.addEventListener("click", getdata);
async function getdata(e) {
  e.preventDefault();
  if (inp.value == "") {
  } else {
 

    let data = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=6c68df8a70f84cc9b6b123635222609&q=${inp.value}&aqi=no`);
    let res = await data.json();

    let err = res.error
    if(err){
      alert("please type correct city name")
    }else{
     d.style.display = "flex";
    let temp = res.current.temp_c;
    tempe.innerHTML = `${temp}ºC`;
    let cityn = res.location.name;
    city.innerHTML = cityn;
    img.setAttribute("src", `http:${res.current.condition.icon}`);
    hum.innerHTML = res.current.humidity + "%";
    preci.innerHTML = res.current.precip_mm + "mm";
    lastup.innerHTML = res.current.wind_kph+"kph";
    

    
    }
  }
  inp.value = "";
}
getdata();

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9acc11fdd9msh45082e4b682f242p19645bjsndafedfbf53fc',
// 		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
// 	}
// };
