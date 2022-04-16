import '../App.css';
import React, { useEffect, useState } from 'react'
import { moviesData } from '../Data';
import MovieCard from './movieCard';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../Redux/Actions/movies_actions';




const ListMovies=()=> {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMovies())
  }, []);
    const movies = useSelector((state)=>state.movies)
    // console.log(movies)
  return (
    <>
{movies.map((movie,key) =>{
    return(<MovieCard movie={movie} key={key} />)
    })}



  


      {/* <p>a {movies[0].name}</p> */}





        {/* {contacts.map((contact,key) =>{
    return(
      <ContactCards contact={contact} key={key} />
    )
      })} */}

{/* {contacts.map((contact) =>{
    return(
      <ContactCards contact={contact} key={contact.id} />
    )
      })
      } */}
    </>
  )
}











// function ListMovies() {
//   // const [movies, setMovies] = useState(moviesData);
//   return (
//     <div className='films'>
//         {movies.map((movie ,key)=><MovieCard movie={movie} key={key}/>)}





//     </div>
//   )
// }


export default ListMovies;



