// Компонент для планированя времени сбытия (напоминания)

import React from 'react'
import Slider from 'react-input-slider';
import './timeEvent.css'

export default function TimeEvent() {
    let tickingStyle = {textAlign: 'center', fontSize: 60};

    let textContent = {
    titleSection : 'Таймер',
    legend : 'Давайте запланируем напоминание!',
    message : 'Привет, ты просил напомнить!',
    label: 'Через сколько напомнить?',
    button : 'Запустить таймер на: ',
    }

     let [message, setMessage] = React.useState(textContent.message)
    let [i,setI] = React.useState(0)
    let [tick,setTick] = React.useState()
    const [time, setTime] = React. useState(0);
    // let [startTimer, setStartTimer] = React.useState(false);
    //let [ticking, setTicking] = React.useState();
    let value;

    //if (tick == 0) { alert('Время пришло!!!')} ;

    React.useEffect (()=>{
    if (tick >= 0) {    
    console.clear()
    console.log([message, time, i]);    
    let interval = setInterval(()=>{
    setTick(tick--)
    



    } , 1000);
    return  () => clearInterval(interval)
} else if (tick < 0) {setTick(message)}
});



return (
<section>
    <h1>{textContent.titleSection}</h1>
    <fieldset>
    <legend>{textContent.legend}</legend>
    <textarea name="message" value={value} className='timeEvent_textarea' placeholder='Ваше сообщение'  onChange={(event)=>{setMessage(event.target.value)}} id='message'></textarea>
    <br/>
    <label>{textContent.label}
    <br/>
    <button onClick={()=>{  console.clear(); setTime(time+60); }}>+1 минут</button>
    <button onClick={()=>{  console.clear(); setTime(time+300); }}>+5 минут</button>
    <button onClick={()=>{  console.clear(); setTime(time+900); }}>+15 минут</button>
    <button onClick={()=>{  console.clear(); setTime(time+1800); }}>+30 минут</button>
    <button onClick={()=>{  console.clear(); setTime(time+2400); }}>+40 минут</button>
    <button onClick={()=>{  console.clear(); setTime(time+3600); }}>+60 минут</button>
    <button onClick={()=>{  console.clear(); setTime(0);  }}>Обнулить</button>
    <br/>
    {/*<input value={value} className='timeEvent__input' name="timeRange" onChange={(event)=> {setTime(event.target.value)}} id='time'></input>*/}
    </label>
    <button onClick={()=>{ console.clear(); setI(i++);     setTick(time); console.log(`Запуск таймера № ${i}`)}}> {textContent.button}  {time}  </button>
    </fieldset>
    <h1 style={tickingStyle}>{tick}</h1>
</section>
)}
