class UI
{
 constructor()
{
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
}

 paint(result)
 {
     this.location.textContent = result.name;
     this.desc.textContent = result.weather[0].description;
     this.string.textContent = `${Math.round(result.main.temp-273)} degree Celsius`;
     this.icon.textContent = result.weather[0].icon;
     this.humidity.textContent = `Relative Humidity: ${result.main.humidity}`;
     this.feelsLike.textContent = `feels-like: ${result.main.feels_like}`;
     this.dewpoint.textContent = `DewPoint: ${result.main.pressure}`;
     this.wind.textContent = `wind: ${result.wind.speed}`;

 }
}