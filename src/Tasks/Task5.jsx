import { useState } from 'react'

const WeatherApp = ({ setData }) => {
  const [place, setPlace] = useState("")
  const checkWeather = () => {
    // google-chrome --disable-web-security
    // Run this command before running this component
    fetch(`https://www.metaweather.com/api/location/search/?query=${place}`)
      .then(response => response.json())
      .then(data => {
        fetch(`https://www.metaweather.com/api/location/${data.woeid}`)
        setData(data)
      })
      .catch(error => console.log(error))

  }
  return (
    <div>
      <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
      <button
        onClick={checkWeather}
      >Check</button>
    </div>
  )
}

const ShowWeather = ({ data }) => {
  return (
    <div>
      {data.map(place => {
        return (
          <div className="card">
            <div className="card-title">{place.title}</div>
            <div>
              <p>latt_long: {place.latt_long}</p>
              <p>location_type: {place.location_type}</p>
              <p>woeid: {place.woeid}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function Task5() {
  const [data, setData] = useState([])
  return (
    <div className="box">
      <h1>Task 5 </h1>
      <WeatherApp setData={setData} />
      <ShowWeather data={data} />
    </div>
  )
}
