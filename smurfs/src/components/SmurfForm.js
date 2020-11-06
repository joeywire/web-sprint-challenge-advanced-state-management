import React, { useState } from "react";
import smurfReducer from "../reducers/smurfReducer";


const SmurfForm = () => {
    const initialSmurf = {
        name: "",
        age: null,
        height: ""
    }

    const [newSmurf, setNewSmurf] = useState(initialSmurf)

    const handleChange = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        })
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
        </div>
    )
}

export default SmurfForm;