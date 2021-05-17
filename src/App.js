import './App.css';
import React, {useState} from 'react';
import Extern from './Pages/Extern';
import Intern from './Pages/Intern'



//To Do
// * slider that loads html from an array - DONE
// * loads slides between two dates
// * fullscreen with a hidden mouse - working on
// * Display extern tv or intern tv with staff available and unavailable showing - Möte med Magnus
// * Load slides for current location
// * Clock needs to be shown with current time - working on
// * For external tv current patient number needs to be shown - Möte med Magnus
// * 

function App() {
return (
    <div className="App">
      {/* Clock and date here */}
      <Extern />
      {/* <Intern /> */}
      {/* Current patient number here */}
    </div>
  );
}

export default App;
