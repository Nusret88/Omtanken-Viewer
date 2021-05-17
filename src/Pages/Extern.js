import React, {useState, useContext} from 'react';
import SlideView from '../Components/SlideView';
import DigitalClock from '../Components/DigitalClock';

export default function Extern() {
  return (
    <div>
      <div className="Header">
        <h2>
      <DigitalClock />
      </h2>
      </div>
      <div className="Body">
      <SlideView />
      </div>
<div className="Footer">
  <p>DÅ</p>
</div>
    </div>
  );
}