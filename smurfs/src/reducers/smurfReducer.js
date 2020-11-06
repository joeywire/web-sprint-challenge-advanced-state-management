import { 
    POST_SMURF_FAILURE, 
    POST_SMURF_SUCCESS, 
    POST_SMURF_START 
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
                error: action.payloadss
            }
        default:
            return state;
    }
};

export default smurfReducer;

// {name: 'Brainey', age: 200, height: '5cm'}