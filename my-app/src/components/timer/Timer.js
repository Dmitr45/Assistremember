import React from 'react';
import TimeEvent from '../input/TimeEvent';
import './timer.css'

export default function Timer() {

let [nameTimers, setNameTimers] = React.useState([
{
index: 1,
name: "Основной",
}
]); 
let [nameTimer, setNameTimer] = React.useState("Еще один") ;
let [timers, setTimers] = React.useState('');
let value;
let [index, setIndex] = React.useState(2);

React.useEffect(()=> {
setTimers(()=>{return nameTimers.map(item =><div> <TimeEvent Name={item.name} Index={item.index}/> </div> )})
}
, [nameTimers])
let buttonAddTimer = <div className='button_AddTimer' onClick={()=>{
    setIndex(index+1);
    setNameTimers([...nameTimers, {index: index, name: nameTimer} ]);          
    console.log(`+ timer № ${index}`);   
            }
                }>+</div>;
let buttonRemoveTimer = <div className='button_AddTimer'>-</div>;

  return (
    <div>
        {timers} <br/>
        Добавить еще один таймер: 
        <input name="nameTimer" placeholder={nameTimer} className='nameTimer_input' value={value} onChange={(event)=> { setNameTimer(event.target.value )}} ></input>
        {buttonAddTimer}
    </div>
  )
}
