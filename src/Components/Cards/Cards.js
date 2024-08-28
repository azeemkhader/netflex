import React, { useEffect, useState } from 'react'
import './Cards.css'
import axios from '../../axios'
import Youtube from 'react-youtube'
import { API_KEY , imageUrl  } from '../../Constants/Constants'
function Cards(props) {
  
  const [movies,setMovies] = useState([])
  const [ytkey,setYtkey] = useState('')
  
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })
  },[])
  const opts = {
    height: '390px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

 const handleClick = (id)=>{
  axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    if(response.data.results.length!==0){
      setYtkey(response.data.results[0])
    }else{
      console.log("Array Empty");
    }

  })    
 }


  


  return (
    <div className='row'>
        <h2>{props.title} </h2>
        <div className="posters">
          {
            movies.map((obj)=>
              <img onClick={()=>handleClick(obj.id)} src={`${imageUrl+obj.backdrop_path}`} alt="" className={props.isSmall ? 'poster_small' : 'poster_img' } />
            )
          }

          
        </div>

        { ytkey && <Youtube opts={opts} videoId={ytkey.key} /> }

        
      
    </div>
  )
}

export default Cards
