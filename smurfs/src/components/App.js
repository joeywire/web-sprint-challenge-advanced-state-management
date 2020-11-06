import React from "react";

import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import "./App.css";


const App = () => {

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfForm />
        <SmurfList />
      </div>
    );

}

export default App;
