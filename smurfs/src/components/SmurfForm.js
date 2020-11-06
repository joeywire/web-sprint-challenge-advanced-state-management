import React, { useState } from "react";
import { connect } from "react-redux";

import { postNewSmurf } from "../actions/smurfActions";
import smurfReducer from "../reducers/smurfReducer";


const SmurfForm = (props) => {
    const initialSmurf = {
        name: "",
        age: "",
        height: ""
    }

    const [newSmurf, setNewSmurf] = useState(initialSmurf)

    const handleChange = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.postNewSmurf(newSmurf);
        setNewSmurf(initialSmurf);
    }
    return (
        <div className="smurfForm">
            <h2>Add a Smurf!</h2>
            <div className="inputs">
                <input className="nameInput"
                    type="text"
                    name="name"
                    value={newSmurf.name}
                    onChange={handleChange}
                    placeholder="Enter Smurfs Name..."
                />
                <input className="ageInput"
                    type="text"
                    name="age"
                    value={newSmurf.age}
                    onChange={handleChange}
                    placeholder="Enter Smurfs Age..."
                />
                <input className="heightInput"
                    type="text"
                    name="height"
                    value={newSmurf.height}
                    onChange={handleChange}
                    placeholder="Enter Smurfs Height..."
                />
            </div>
            <button onClick={handleSubmit}>Add Your Smurf!</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        error: state.error, 
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {postNewSmurf})(SmurfForm);