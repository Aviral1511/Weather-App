import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({data}) {
    
    const HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90fGVufDB8fDB8fHww";
    const COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW58ZW58MHx8MHx8fDA%3D"


    return (
        <div className="infoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={data.humidity > 80 ? RAIN_URL : data.temp > 15 ? HOT_URL : COLD_URL}
                title="green iguana"
            />
            <CardContent className='infoContent'>
                <Typography gutterBottom variant="h5" component="div">
                {data.city} {data.humidity > 80 ? < ThunderstormIcon/> : data.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <div><b> Temperature  : {data.temp}&deg;C </b></div>
                    <div> <b> Humidity : {data.humidity} </b></div>
                    <div><b> Feels Like : {data.feelsLike}&deg;C </b></div>
                    <div><b> Weather's feeling like : {data.weather} </b></div>
                    <div><b> Today's Wind Speed : {data.windSpeed} km/h </b></div>
                </Typography>
            </CardContent>
            <CardActions className='btns'>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
            </div>
        </div>
    );
}

