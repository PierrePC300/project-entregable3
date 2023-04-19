import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Location from './components/Location'
import ResidentList from './components/ResidentList'
import { getRandomDimension } from './helpers/random'



function App() {

  const [location, setLocation] = useState()

  const handleSubmit =(e)=>{
    e.preventDefault()
    const newLocation= e.target.locationId.value 

    const URL= `https://rickandmortyapi.com/api/location/${newLocation}`
     
    axios.get(URL)
      .then((res) =>setLocation(res.data))
      .catch((err) => console.log(err))
    }

  useEffect(() => {
    const URL=`https://rickandmortyapi.com/api/location/${getRandomDimension()}`
    
    axios.get(URL)
      .then((res)=> setLocation(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <img src="/img/bg2.png" alt="" />
     <form  onSubmit={handleSubmit}>
      <center>     
      <div>
        <input id='locationId' placeholder='Type a location Id...' className='border-2 border-black my-10' type="text" />
        <button className='buscador'>Search <i className='bx bx-search-alt'></i></button>
      </div>
      </center> 
      <h2 className='titulo my-8'>Welcome to the crazy universe!</h2>
     </form>
     <Location location={location}/>
     <ResidentList location={location} />
    </div>
  )
}

export default App
