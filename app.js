
const storage =new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation);
// initializing ui

const ui = new UI;

document.addEventListener('DOMContentLoaded' , getWeather);

document.getElementById('w-change-btn').addEventListener('click' , 
function(e)
{
    const city = document.getElementById('city').value;

    weather.changeLocation(city);
    storage.setLocationData(city);

    getWeather();
    
    // close modal
    alert($('#locModal').modal('hide'));
});


function getWeather()
{
weather.getWeather().then(function(data)
{
ui.paint(data);
}).catch(function(err)
{
    console.log(err)
});
}