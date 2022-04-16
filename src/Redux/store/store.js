import { createStore ,applyMiddleware,compose} from "redux";

import thunk from 'redux-thunk';
import { moviesReducer } from "../Redusers/movies_Reduser";

const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose


export const store = createStore(moviesReducer,composeEnhancers(applyMiddleware(thunk)));
