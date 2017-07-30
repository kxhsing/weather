import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ]; //adds new city data onto the array (new), not 
            //manipulating existing array, which is not allowed in Redux
    }

    return state;

}