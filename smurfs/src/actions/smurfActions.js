import axios from 'axios';

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE";

export const postNewSmurf = (smurf) => {
    return (dispatch) => {
        // dispatch({ type: POST_SMURF_START });

        axios.post("http://localhost:3333/smurfs", smurf)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
}