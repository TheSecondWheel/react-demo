import { useState, useEffect } from 'react'
import "../App.css"

const WeatherApp = ({ setData, data }) => {
  const [place, setPlace] = useState("")
  const checkWeather = async () => {
    // google-chrome --disable-web-security
    // Run this command before running this component

    const resp = await fetch(`https://www.metaweather.com/api/location/search/?query=${place}`)
    const place_array = await resp.json()
    place_array.map(async (location, index) => {
      let loc = await fetch(`https://www.metaweather.com/api/location/${location.woeid}/`)
      let loc_obj = await loc.json()
      console.log("Data", data)
      let arr = data
      arr.push(loc_obj)
      setData(arr)
    })

  }
  return (
    <div>
      <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
      <button
        onClick={() => {
          setData([])
          checkWeather()
        }}
      >Check</button>
    </div>
  )
}

const ShowWeather = ({ place }) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("Place", place)
    setCount(count + 1)
  }, [place])
  return (
    <div>
      {place.length > 0 && place.map((data) => {
        return (
          <div className="card" key={data.woeid} style={{ display: "inline-block", border: "2px solid black", padding: "5px" }}>
            {/* <div className="card-title" style={{ fontWeight: "bolder" }}>{data.title}</div> */}
            <div>
              <div>
                <h1>Weather </h1>
                <ul>
                  <p> Minimum temprature : { data.consolidated_weather[0].min_temp } </p>
                  <p> Maximum temprature : { data.consolidated_weather[0].max_temp } </p>
                </ul>
              </div>
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
      <WeatherApp setData={setData} data={data} />
      <button class="btn" onClick={() => setData([])}>Clear</button>
      {/* <button
        onClick={() => {
          setData([...data])
        }}
      >Show All</button> */}
      <ShowWeather place={data} />
    </div>
  )
}
