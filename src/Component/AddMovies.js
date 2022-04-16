import React, { useState } from 'react'
import { addMovies } from '../Redux/Actions/movies_actions'
import { useDispatch, useSelector } from 'react-redux';







function AddMovies() {
  const dispatch = useDispatch()
  const [form,setForm]=useState({})
  const handleChange=(e)=>{
   setForm ({...form,[e.target.name]:e.target.value})
  //  console.log(form)
  }
  return (
    <div>
      <form className='formAdd'>
        <label >srcImg: </label> <input type='text' className='srcImg' name="srcImg" onBlur ={handleChange}/>
        <label >title: </label><input type='text' className='title' name='title' onBlur ={handleChange}/>
        <label >srcTrailer: </label><input type='text' className='srcTrailer' name='srcTrailer' onBlur ={handleChange}/>
        <label >sinopsis: </label> <input type='text' className='sinop' name='sinopsis' onBlur ={handleChange}/>
        <div><input className='sendBtn' type='button' value='send' onClick={()=>  dispatch(addMovies(form))}/></div>
      </form>
    </div>
  )
}

export default AddMovies