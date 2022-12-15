import { useState } from 'react'
import useFetch from './useFetch'
import './App.css'

function App() {
  const { data, loading, error, refetch } = useFetch("https://www.boredapi.com/api/activity");
  console.log(data)
  if (loading) return <h1>Loading...</h1>
  if (error) return console.log(error)
  return (
    <div className="App">
      <h1>This is what you should do :)</h1>
      <h2>
        {data?.activity}
      </h2>
      <h3>
        Type of activity: {data?.type}
      </h3>

      <button onClick={refetch}>Generate a new activity</button>
    </div>
  )
}

export default App
