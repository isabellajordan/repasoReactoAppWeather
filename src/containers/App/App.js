import React from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { Grid, CssBaseline } from '@material-ui/core';


const days= [
  
  {
    day: 'Wed',
    icon: "http://openweathermap.org/img/wn/02d@2x.png",
    min:'70°',
    max: '90°',
  },
  
  {
    day: 'Thu',
    icon: "http://openweathermap.org/img/wn/04d@2x.png",
    min:'50°',
    max: '80°',
  },
  
];



function App() {
  return (
    
    <div>
    <h1>Holassss</h1>
    
    
    <Grid container spacing={3}>
    
    {days.map((item) =>
   <Grid item md={2} >
    <WeatherCard 
    day= {item.day}
    icon= {item.icon}
    min= {item.min}
    max= {item.max}
    />
  </Grid>
   )}
    
    </Grid>
    
    <CssBaseline/>
    
    </div>
    
    );
  }
  
  export default App;
  