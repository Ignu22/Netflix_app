import React, { useEffect, useState } from 'react'
import {API_KEY, ImageUrl} from '../../constants/Constants'
import axios from '../../Axios'
import './Banner.css'
function Banner() {

  const [movie, setMovie] = useState()
  
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results)
      setMovie(response.data.results[5])
    })
  }, [])
  
  return (
    <div
    style={{backgroundImage: `url(${movie ? ImageUrl+movie.backdrop_path :""})`}} 
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.name : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <div className='description'>{movie ? movie.overview : ""}</div>       
        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner