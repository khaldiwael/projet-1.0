// import axios from "axios"
import { moviesData } from "../../Data"
import { ADD_MOVIE, DELETE_MOVIES, GET_MOVIES } from "../ActionTypes/ActionsType"

   export const  getMovies = () => {
    // const res= await axios.get(
    //    "https://jsonplaceholder.typicode.com/users" );

    // console.log(moviesData)
    return({
        type : GET_MOVIES,
        payload : moviesData,

    })
}

export const  addMovies = (movie) => {
    // const res= await axios.get(
    //    "https://jsonplaceholder.typicode.com/users" );

    console.log('movie')
    console.log(movie)
    return({
        type : ADD_MOVIE,
        payload : movie,
    })
}

export const  deleteMovies = (id) => {
    return ({
        type:DELETE_MOVIES,
        payload : id
    })

}




// export const getMovies = () => async (dispatch) => {
//     try{
//         let data =""
//         const res= await axios.get(
//         //    "https://jsonplaceholder.typicode.com/users" );
//         //    console.log('a',res);


        

//         dispatch({
//             type:GET_MOVIES,
//             payload:data,
//         }))
//     } catch (error) {
//         dispatch({
//             type:FAIL_MOVIES,
//             payload:error,
//         });
//     }
// }