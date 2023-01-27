import React,{useState,useEffect} from 'react'
import instance from '../baseUrl'
import './Banner.css'

function Banner({fetchUrl}) {
        //movies state
        const [movie,setMovies]=useState([])
        // console.log('hhii');
        // console.log(fetchUrl);
         async function fetchData(){
         const result = await instance.get(fetchUrl)
         console.log(result.data.results);
         setMovies(result.data.results[
            Math.floor(Math.random() * result.data.results.length-1)
         ])
        }
        useEffect(()=>{
          fetchData()
        },[])
        const base_url = "https://image.tmdb.org/t/p/original/";

        console.log(movie)
  return (
    <div className='banner' style={
        {
            backgroundImage:`url(${base_url}${movie.backdrop_path})`,
            backgroundSize:"cover",
            backgroundPosition:"center"
        }
    }>
        <div className='banner_content'>
            <h1 className='banner_title'>{movie.name}</h1>
            <h3 className='banner_desc'>{movie.overview}</h3>
            </div>
        
    </div>
  )
}

export default Banner