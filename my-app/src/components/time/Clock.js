import './Clock.css';
import React from 'react'

export default function Clock() {

const [clockTime, setClockTime] = React.useState(`00 :  00  : 00 PM`);

let RealTime = ()=> {
    let date = new Date();
    let time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    };
    return ( `${(time.hours<10) ? "0" + time.hours: time.hours} :  ${(time.minutes<10) ? "0" + time.minutes: time.minutes}  : ${(time.seconds<10) ? "0" + time.seconds: time.seconds} ${time.hours >= 12 ? time.ampm = "PM": time.ampm = "AM"}`)
    }


React.useEffect(() => {
    const interval = setInterval(() => {
    setClockTime( RealTime );
    }, 1000);
    return () => clearInterval(interval);
    }, []);

return (
        <div className='clock'> 
        { clockTime }
        </div>
    )
}