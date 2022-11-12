import React, { useState } from "react";
// import Axios  from 'axios';
import whitesky from "../assets/whitesky.png";
import { ImLocation2 } from "react-icons/im";
import axios from "axios";
export default function Weather() {
  console.log("weather component");
  const [weatherdata, setweatherdata] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [lat, setlat] = useState("");
  const [lon, setlon] = useState("");

//   React.useEffect(() => {
//     console.log("first");
//   });
  const apiCall = () => {
    console.log(lat,lon,"values")
    setLoading(true);
    //    useEffect(() => {
    //     console.log("first")
    // let lon=75.810814;
    // let lat=11.2558347;

    // if (weatherdata.length <= 0) {
      // const Api ='https://api.open-meteo.com/v1/forecast?latitude=11.2558347&longitude=75.810814&daily=weathercode,temperature_2m_max&current_weather=true&timezone=Europe%2FLondon'
      const Api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max&current_weather=true&timezone=Europe%2FLondon`;
      // async function getdata(){
      // if (weatherdata.length <= 0) {
      axios
        .get(Api)

        .then((response) => {
          console.log(response.data);
          setweatherdata(response.data);
          console.log(response, "response");
          setLoading(false);
        });
    };
    // finally{}
  
  // },[weatherdata]);
//   console.log(weatherdata,"weather data")
  const weatherchange = (weathercode) => {
    switch (weathercode) {
      case 0:
        return "Clear sky";
      case 1:
        return "Mainly clear";
      case 2:
        return "Partly cloudy";
      case 3:
        return "Overcast";
      case 45:
        return "Fog";
      case 48:
        return " Depositing rime fog";
      case 51:
        return " Drizzle: Light intensity";
      case 53:
        return " Drizzle: Moderate intensity";
      case 55:
        return " Drizzle: Dense intensity";
      case 56:
        return " Freezing Drizzle: Light intensity";
      case 57:
        return " Freezing Drizzle: Dense intensity";
      case 61:
        return " Rain : Slight intensity";
      case 63:
        return " Rain : Moderate intensity";
      case 65:
        return " Rain : Heavy intensity";
      case 66:
        return " Freezing Drizzle : Light intensity ";
      case 67:
        return " Light and heavy intensity ";
      case 71:
        return " Snow fall";
      case 73:
        return " Slight, moderate";
      case 75:
        return " Slight, moderate";
      case 77:
        return " Snow grains";
      case 80:
        return " Rain showers : Slight ";
      case 81:
        return " moderate";
      case 82:
        return "violent ";
      case 85:
        return " Snow showers slight";
      case 86:
        return " heavy";
      case 95:
        return " Thunderstorm: Slight or moderate";
      case 96:
        return " Thunderstorm with slight hail ";
      case 99:
        return " Thunderstorm with slight and heavy hail";
      default:
        return <h1>No Match Found</h1>;
    }
  };
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
         <article
            className="img"
            style={{ backgroundImage: `url(${whitesky})` }}
          >
      <div className="home-container">
        <div className=" ">
          <input
            className="bg-transparent  border-black border-2 hover:border-blue-900 text-center mt-[100px] ml-[1000px]"
            onChange={(e) => setlon(e.target.value)}
            value={lon}
            type="text"
            placeholder="longitude"          />
          <input
            className="bg-transparent border-black border-2 hover:border-blue-900 text-center mt-4 ml-[1000px] text-black"
            type="text"
            onChange={(e) => setlat(e.target.value)}
            value={lat}
            placeholder="Latitude"
          />{" "}
          <br></br>
          <button
            className="bg-transparent border-blue-900 border-2 hover:border-white ml-[1000px] w-[180px] mt-4"
            onClick={apiCall}
          >
            {" "}
            GO
          </button>
        </div>
        {/* {Object.keys(weatherdata).length !== 0 && ( */}
          {/* <article
            className="img"
            style={{ backgroundImage: `url(${whitesky})` }}
          > */}
            {/* <div className='location text-black  '>
                <input className='bg-transparent border-slate-200 border-2 hover:border-black text-center mt-[100px] ml-[1000px]'type='text' placeholder='Longitude'></input>
                <input className='bg-transparent border-slate-200 border-2 hover:border-black text-center mt-4 ml-[1000px]'type='text' placeholder='Latitude'></input>

            </div> */}

            {/* {Object.keys(weatherdata).legth !==0 && ()} */}
            <div className="main-container  pl-16 pr-[1000px] ">
              <div className="card ">
                <div className="item">
        {Object.keys(weatherdata).length !== 0 && (

                  <p className="font-mono text-center font-light  text-white text-8xl">
                    {" "}
                    {`${Math.round(
                      weatherdata.current_weather.temperature
                    )}`}{" "}
                    &deg;c
                  </p>)}
        {Object.keys(weatherdata).length !== 0 && (

                  <p className="font-mono text-center font-light text-white text-2xl">
                    {weatherdata.current_weather.weathercode === 0 &&
                      "clear sky"}{" "}
                  </p>)}
        {Object.keys(weatherdata).length !== 0 && (

                  <p className="font-mono text-center font-light  text-white text-2xl">
                    {" "}
                    {weatherdata.current_weather.time}{" "}
                  </p>)}
        {Object.keys(weatherdata).length !== 0 && (

                  <p className="flex font-mono text-center font-light pl-[125px] text-white text-2xl">
                    <ImLocation2 /> {weatherdata.timezone}{" "}
                  </p>)}
        {Object.keys(weatherdata).length !== 0 && (


                  <p className="font-mono text-center font-light  text-white text-2xl">
                    {" "}
                    Wind Direction:
                    {`${Math.round(
                      weatherdata.current_weather.winddirection
                    )}`}{" "}
                  </p>)}
        {Object.keys(weatherdata).length !== 0 && (

                  <p className="font-mono text-center font-light  text-white text-2xl">
                    {" "}
                    Wind Speed:
                    {`${Math.round(
                      weatherdata.current_weather.windspeed
                    )}`}{" "}
                  </p>)}
                </div>
              </div>
            </div>
            <div className="pt-20 pl-8 ">
              <div className="flex">
        {Object.keys(weatherdata).length !== 0 && (

                <p className="text-2xl">
                  {" "}
                  {weatherdata.daily.time[0]} :{" "}
                  {`${Math.round(weatherdata.daily.temperature_2m_max[0])}`}{" "}
                  &deg;C
                </p>)}
        {Object.keys(weatherdata).length !== 0 && (

                <p className="text-2xl pl-12">
                  {weatherchange(weatherdata.daily.weathercode[0])}
                </p>)}
                <br />
              </div>
              <br />
              <div className="flex">

        {Object.keys(weatherdata).length !== 0 && (

                <p className="text-2xl">
                  {" "}
                  {weatherdata.daily.time[1]} :{" "}
                  {`${Math.round(weatherdata.daily.temperature_2m_max[1])}`}{" "}
                  &deg;C
                </p>)}
                {Object.keys(weatherdata).length !== 0 && (

                <p className="text-2xl pl-12">
                  {weatherchange(weatherdata.daily.weathercode[1])}
                </p>)}
                <br />
              </div>
              <br />
              <div className="flex"> 
        {Object.keys(weatherdata).length !== 0 && (

                <p className="text-2xl">
                  {" "}
                  {weatherdata.daily.time[2]} :{" "}
                  {`${Math.round(weatherdata.daily.temperature_2m_max[2])}`}{" "}
                  &deg;C
                </p>)}
                
        {Object.keys(weatherdata).length !== 0 && (

                <p className="text-2xl pl-12">
                  {weatherchange(weatherdata.daily.weathercode[2])}
                </p>)}
                <br />
              </div>
              <br />
              <div className="flex">
        {Object.keys(weatherdata).length !== 0 && (
                

                <p className="text-2xl">
                  {" "}
                  {weatherdata.daily.time[3]} :{" "}
                  {`${Math.round(weatherdata.daily.temperature_2m_max[3])}`}{" "}
                  &deg;C
                </p>)}
                
        {Object.keys(weatherdata).length !== 0 && (

                <p className="text-2xl pl-12">
                  {weatherchange(weatherdata.daily.weathercode[3])}
                </p>)}
                <br />
              </div>
              <br />
              <div className="flex">
                
              {Object.keys(weatherdata).length !== 0 && (

                <p className="text-2xl">
                  {" "}
                  {weatherdata.daily.time[4]} :{" "}
                  {`${Math.round(weatherdata.daily.temperature_2m_max[4])}`}{" "}
                  &deg;C
                </p>)}
        {Object.keys(weatherdata).length !== 0 && (

                <p className="text-2xl pl-12">
                  {weatherchange(weatherdata.daily.weathercode[4])}
                </p>)}
                <br />
              </div>
              <br />
              <div className="flex">
        {Object.keys(weatherdata).length !== 0 && (

                <p className="text-2xl">
                  {" "}
                  {weatherdata.daily.time[5]} :{" "}
                  {`${Math.round(weatherdata.daily.temperature_2m_max[5])}`}{" "}
                  &deg;C
                </p>)}
        {Object.keys(weatherdata).length !== 0 && (

                <p className="text-2xl pl-12">
                  {weatherchange(weatherdata.daily.weathercode[5])}
                </p>)}
                <br />
              </div>
              <br />
              <div className="flex">
        {Object.keys(weatherdata).length !== 0 && (

                <p className="text-2xl">
                  {" "}
                  {weatherdata.daily.time[6]} :{" "}
                  {`${Math.round(weatherdata.daily.temperature_2m_max[6])}`}{" "}
                  &deg;C
                </p>)}
        {Object.keys(weatherdata).length !== 0 && (

                <p className="text-2xl pl-12">
                  {weatherchange(weatherdata.daily.weathercode[6])}
                </p>)}
                <br />
              </div>
              <br />
            </div>

            {/* </div>
            </div>
            </div> */}

            {/* <div className='location'>
                <input className='bg-transparent border-zinc-50 ml-[1100px] pt-[10px]'type='text' placeholder='Select Locatiion'></input>
            </div> */}
            <div className="pt-4 pl-12">
              {/* <p className='text-2xl'>{weatherchange (weatherdata.daily.weathercode[0])}</p><br/> */}
              {/* <p className='text-2xl'>{weatherchange (weatherdata.daily.weathercode[1])}</p><br/> */}
              {/* <p className='text-2xl'>{weatherchange (weatherdata.daily.weathercode[2])}</p><br/> */}
              {/* <p className='text-2xl'>{weatherchange (weatherdata.daily.weathercode[3])}</p><br/> */}
              {/* <p className='text-2xl'>{weatherchange (weatherdata.daily.weathercode[4])}</p><br/> */}
              {/* <p className='text-2xl'>{weatherchange (weatherdata.daily.weathercode[5])}</p><br/> */}
              {/* <p className='text-2xl'>{weatherchange (weatherdata.daily.weathercode[6])}</p><br/> */}
            </div>
            {/* <div>
                <p className='text-2xl'> {weatherdata.daily.weathercode[0]}</p>
                <p className='text-2xl'> {weatherdata.daily.weathercode[1]}</p>
                <p className='text-2xl'> {weatherdata.daily.weathercode[2]}</p>
                <p className='text-2xl'> {weatherdata.daily.weathercode[3]}</p>
                <p className='text-2xl'> {weatherdata.daily.weathercode[4]}</p>
                <p className='text-2xl'> {weatherdata.daily.weathercode[5]}</p>
                <p className='text-2xl'> {weatherdata.daily.weathercode[6]}</p>

            </div> */
        };
        </div>
          </article>
    
        
      </div>
    // </div>
  );
    
        }