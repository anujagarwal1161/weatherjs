class Weather
{
    constructor(city)
    {
        this.apiKey = '420fd40fc67a6ba4cbcce843b4402ff0';
        this.city = city;
    }
   async getWeather()
    {
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)
       const responsedata = await response.json();
       return responsedata;
    }
    changeLocation(city)
    {
        this.city = city;
    }
}