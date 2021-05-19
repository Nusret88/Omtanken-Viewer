import './App.css';
import React, {useState, useContext} from 'react';
import Extern from './Pages/Extern';
import Intern from './Pages/Intern';
import {SlideContext} from './Context/SlideContext';

function App() {
  const {tv} = useContext(SlideContext);

return (
    <div className="App">
      {!tv ? <Extern/> : <Intern/>}
    </div>
  );
}

export default App;
