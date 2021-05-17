import React, {useState}  from 'react';
import Clock from 'react-live-clock';

export default function DigitalClock() {
  // const [date, setDate] = useState(new Date);
    return (
      <Clock format="yyyy-MM-DD, HH:mm:ss" ticking={true}  timezone={'Sverige/Stockholm'} />
      );
}