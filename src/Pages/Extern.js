import React, {useState, useContext} from 'react';
import SlideView from '../Components/SlideView';
import DigitalClock from '../Components/DigitalClock';
import omtanken from '../Images/omtanken.png'

export default function Extern() {
  const [ticketNumber, setTicketNumber] = useState(1);
  return (
    <div className="Extern">
      <div className="Extern-Header">
        <h2 className="Extern-Clock">
      <DigitalClock />
      </h2>
      <img src={omtanken} alt="Logo" className="Logo"/>
      </div>
      <div className="Extern-Body">
      <SlideView />
      </div>
<div className="Extern-Footer">
 <h1>{ticketNumber}</h1>
</div>
    </div>
  );
}