import { ADD_MOVIE, DELETE_MOVIES, GET_MOVIES } from "../ActionTypes/ActionsType";
// import {moviesData} from '../../Data'


const initialState = {
    movies:[],
};




export const moviesReducer = (state =initialState,action ) =>{
    switch(action.type){
        case GET_MOVIES:
            {
                // console.log(moviesData)
            return{...state,movies:action.payload}}
        case ADD_MOVIE:
            {
                console.log(state)
                return{...state,movies:[...state.movies,action.payload]};
            }
        case DELETE_MOVIES:
            return{
                ...state,movies: state.movies.filter((m)=>m.id !==action.payload)
            }
        default:
            return state;
    }
}