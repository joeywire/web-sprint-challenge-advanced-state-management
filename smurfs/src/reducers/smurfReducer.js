import { 
    POST_SMURF_FAILURE, 
    POST_SMURF_SUCCESS, 
    POST_SMURF_START, 
    GET_SMURF_START, 
    GET_SMURF_FAILURE, 
    GET_SMURF_SUCCESS
} from '../actions/smurfActions'

const initialState = {
    isLoading: false,
    error: "",
    smurfs: []
}

const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_SMURF_START:
            return {
                ...state,
                isLoading: true, 
                error: ""
            };
        case POST_SMURF_SUCCESS: 
            return {
                ...state, 
                isLoading: false, 
                smurfs: action.payload
            };
        case POST_SMURF_FAILURE:
            return {
                ...state, 
                error: action.payload
            }
        case GET_SMURF_START:
            return {
                ...state, 
                isLoading: true, 
                error: ""
            };
        case GET_SMURF_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                smurfs: action.payload
            }
        case GET_SMURF_FAILURE:
            return {
                ...state, 
                error: "We can't find any Smurfs - Pleas wait a minute while we look!"
            }
        default:
            return state;
    }
};

export default smurfReducer;

// {name: 'Brainey', age: 200, height: '5cm'}