import {useEffect, useState} from "react";
import Card from "./Card";

function App() {
  const [lat, setLat ] = useState(null);
  const [long, setLong] = useState(null);
  const [data,setData] = useState({});

  // get giolocation 
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log(lat,long);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0a38acc0b052e485c75bcc32189984de&units=metric`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long]);

  return (
    <div className="card">
      {(typeof data.main != 'undefined') ? (
        <Card weatherData={data}/>
      ): (
        <div><h5>Loading...</h5></div>
      )}
    </div>
  );
}

export default App;
