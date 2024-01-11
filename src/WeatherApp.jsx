import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Hyderabad",
        feelsLike : 26.83,
        humidity : 36,
        pressure : 1017,
        temp : 27.23,
        weather : "Haze",
        windSpeed : 3.09
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign : "center"}}>
            <h1>Weather App</h1>            
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox data = {weatherInfo}/>
        </div>
        
    );

}