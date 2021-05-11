import './App.css';
import React from 'react';
// import parse from 'html-react-parser';


//To Do
// * slider that loads html from an array
// * loads slides between two dates
// * fullscreen with a hidden mouse
// * Display staff available and unavailable

function App() {
  
  return (
    <div className="App">
      <p style={{textAlign: "center"}}>LOAD HTML FILE INTO A AUTOMATED SLIDESHOW</p>
      {/* Seems to be working, more tests are reqiured */}
      <iframe className="view" title="test" srcdoc='<p><span style="font-size: 48px;">Välkomna till&nbsp;</span></p><div class="se-component se-image-container __se__float-none" contenteditable="false"><figure style="margin: 0px;"><img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/02/a9/16.jpg" alt="Bird-White eagle" data-rotate="" data-proportion="true" data-rotatex="" data-rotatey="" data-size="," data-align="none" data-percentage="auto,auto" data-index="0" data-file-name="white-eagle.jpg" data-file-size="0" origin-size="640,380" data-origin="," style=""></figure></div>' />
    </div>
  );
}

export default App;
