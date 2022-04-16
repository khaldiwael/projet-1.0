import '../App.css';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovies } from '../Redux/Actions/movies_actions';

export default function MovieCard(movie) {

// console.log('m',movie)
  const dispatch = useDispatch()
    // useEffect(() => {
    //   // dispatch(deleteMovies(movie.movie.id))
    // }, []);

    const handleDelete=(e)=>{
      console.log(movie)
      dispatch(deleteMovies(movie.movie.id))
    }

  return (
    <>

    <div className='film'>
      <h1 className='movieTitle'>{movie.movie.title}</h1>
      <img src={movie.movie.srcImg} className='filmCover' />
      <Link to={`/details/${movie.movie.id}`} className='LDetails' >details</Link>
      <div><input className='deleteBtn' type='button' value='delete' onClick={handleDelete}  /></div>
    </div>

    {/* <iframe width="300" height="200" src={movie.srcImg} title="YouTube video player" 
    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/> */}

    </>
  )
}