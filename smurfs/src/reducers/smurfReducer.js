

const initialState = {
    isLoading: false,
    error: "",
    smurfs: []
}

const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default smurfReducer;

// {name: 'Brainey', age: 200, height: '5cm'}