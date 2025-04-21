// 505ad21a1e283d6007ce7a9d5aceea85


const date = document.getElementById('date');
const city = document.getElementById('city');
const tempImage = document.getElementById('tempImage');
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const tempMax =document.getElementById('tempMax');
const tempMin =document.getElementById('tempMin');

const months=['January','Feburary','March','April','May','June','July','August','September','October','November','December'];

let dateObj = new Date();
console.log(dateObj)
let month = months[dateObj.getUTCMonth()];
console.log(month)
let day = dateObj.getUTCDate();
console.log(day)
let year =dateObj.getUTCFullYear();
// console.log(year)
console.log(date)
date.innerHTML =`${day} ${month}, ${year}`;


    


const app=document.getElementById('app');
const getWeather = async () => {
    try {
        
        const cityName = document.getElementById('searchInput').value;
        const weatherFetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=505ad21a1e283d6007ce7a9d5aceea85&units=metric`,{       //units=metric converts to celcius
            headers:{
                Accept:'application/json',
            }
        });
       
        const weatherData = await weatherFetchData.json();
        console.log(weatherData);
        function eventCapture(e) {

                if (e.key==='Enter')
                    {
                        console.log("enter key is pressed")
                    }
            }
        searchInput.addEventListener('keypress',eventCapture);
        city.innerHTML=`${weatherData.name}`;
        tempImage.innerHTML=`<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"/>`;
        description.innerHTML=`${weatherData.weather[0].main}`;
        temp.innerHTML=Math.round(`${weatherData.main.temp}`)+"℃";
        tempMax.innerHTML=`${weatherData.main.temp_max}℃`;
        tempMin.innerHTML=`${weatherData.main.temp_min}℃`;
        console.log(tempMin);
    } catch (error) {
        console.log(error);
    }  
}


