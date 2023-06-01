import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './mapView';
import reportWebVitals from './reportWebVitals';
import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'
// function MapView() {
//   window.addEventListener("DOMContentLoaded", function (e) {ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     // document.getElementById('root')
//   );
// });
function MapView() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      //console.log(res)
        // 'https://eonet.gsfc.nasa.gov/api/v2.1/events')
     // https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()
      
      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  );
}


  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // reportWebVitals();


export default MapView;
