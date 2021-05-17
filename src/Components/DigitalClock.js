import React, {useState}  from 'react';
import Clock from 'react-live-clock';

export default function DigitalClock() {
  const [date, setDate] = useState(new Date);
    return (
      <Clock date={date} format="HH:mm:ss, yyyy, MMMM Mo, dddd" interval={1000} ticking={true} />
      );
}