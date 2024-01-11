import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1523172bd53d053c37abeb791f3c2a57";

    const getWeatherInfo = async () => {
        try {
            let info = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonInfo = await info.json();
            let data = {
                city : city,
                temp : jsonInfo.main.temp,
                humidity : jsonInfo.main.humidity,
                feelsLike : jsonInfo.main.feels_like,
                pressure : jsonInfo.main.pressure,
                weather : jsonInfo.weather[0].main,
                windSpeed : jsonInfo.wind.speed
            }
            console.log(data);
            return data;
        } catch (err) {
            throw err;
        }
        
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch (err) {
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
                <br /><br />
                <Button variant="contained" endIcon={<SendIcon />} type = "submit">Search</Button>
            </form>
            {error && <p style={{color : "red"}}>Sorry!! No such Location with us</p>}
        </div>

    );

}