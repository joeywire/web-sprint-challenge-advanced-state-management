import React from 'react'
import { connect } from "react-redux";

const SmurfList = (props) => {

    return (
        <div className="smurfList">
            <h3>Your Smurfs!</h3>
            {props.isLoading ? <p>Loading....</p> : null}
            {props.error ? <p> {props.error} </p> : null}
            {props.smurfs.map(smurf => (
                <div className="smurf">
                    <p>Name: {smurf.name}</p>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                </div>
            ))}
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

export default connect(mapStateToProps, {})(SmurfList)