import './App.css';
import React, {useState} from 'react';
import Extern from './Pages/Extern';
import Intern from './Pages/Intern'



//To Do
// * slider that loads html from an array - DONE
// * loads slides between two dates - Möte med Magnus
// * fullscreen with a hidden mouse - DONE (not working on the slide)
// * Display extern tv or intern tv with staff available and unavailable showing - Möte med Magnus
// * Load slides for current location - Möte med Magnus
// * Clock needs to be shown with current time - DONE
// * For external tv current patient number needs to be shown - Möte med Magnus
// * 

function App() {
return (
    <div className="App">
      <Extern />
      {/* <Intern /> */}
    </div>
  );
}

export default App;
