import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import './Banner.css'

function Banner() {
   const [movie,setMovie] = useState()
   const [intervalId, setIntervalId] = useState(null)
   const fetchRandomMovie = () => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      const randomIndex = Math.floor(Math.random() * response.data.results.length)
      setMovie(response.data.results[randomIndex])
    })
  }

  useEffect(() => {
    fetchRandomMovie()
    const id = setInterval(fetchRandomMovie, 10000) // Change the interval time as needed (in milliseconds)
    setIntervalId(id)

    return () => clearInterval(id)
  }, [])
  return (
    <div className='banner' style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''}) `}}>
        <div className="content">
            <h1 className="title"> {movie ?  movie.title : ""}</h1>
            <div className="buttons">
                <button className="btn">Play</button>
                <button className="btn">My List</button>
            </div>
            <h1 className="description">{movie ?  movie.overview : ""} </h1>
        </div>

        <div className="fade">
            
        </div>

      
    </div>
  )
}

export default Banner
