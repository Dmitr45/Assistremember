// Компонент для планированя времени сбытия (напоминания)

import React from 'react';
import useSound from 'use-sound';
import './timeEvent.css';
import Booom from '../sound/ICQ.mp3';

export default function TimeEvent(props) {
    let textContent = {
    titleSection: `Таймеp №${props.Index}  ${props.Name} `,
    legend: 'Запланируем напоминание?',
    legendRun: 'Напомню через: ',
    message: 'Аууу! Время прошло!',
    label: 'Через сколько напомнить?',
    button: 'Напомнить через: ',
    }
    let timeDiapason = {
            Sec: [ 1, 5, 10, 15],
            Min: [ 1, 5, 10, 15],
            Hour: [ 1, 3, 6, 9]
    }

    let buttonsDiapasonesSec = timeDiapason.Sec.map( item => <div className='button-timeDiapason'  onClick={()=>{ setTime(time+item); }}>+{item} <br/>Sec.</div>);
    let buttonsDiapasonesMin = timeDiapason.Min.map( item => <div className='button-timeDiapason'  onClick={()=>{ setTime(time+item*60); }}>+{item} <br/>Min.</div>);
    let buttonsDiapasonesHour= timeDiapason.Hour.map(item => <div className='button-timeDiapason'  onClick={()=>{ setTime(time+item*3600); }}>+{item} <br/>Hour</div>);
    let value;

    let [message, setMessage] = React.useState(textContent.message);
    let [i,setI] = React.useState(0);
    let [tick,setTick] = React.useState(null);
    const [time, setTime] = React.useState(0);
    let [timeRemainder, setTimeRemainder] = React.useState( [ 0, 0, 0] );
    let [startTimer, setStartTimer] = React.useState(false);
    //let [ticking, setTicking] = React.useState();
    let [soundEnabledSwitch, setSoundEnabledSwitch] = React.useState(true);
    const [stopSound, {setStopSound}] = useSound(Booom, {volume: 0.1, soundEnabled: soundEnabledSwitch, interrupt: false, playbackRate: 1 });

React.useEffect(()=>{
    if (tick >= 0) {  
    let interval = setInterval(()=>{
    setTick(tick--);
    } , 500);
    if (tick === 1) { stopSound(); setSoundEnabledSwitch(false)}
    return  () => clearInterval(interval)
} 
    else if (tick < 0) {setTick(null)}
});

React.useEffect(()=>{
    setTimeRemainder([
    Math.floor(tick/3600),
    Math.floor(tick/60)  -  (Math.floor(tick/3600)*60),
    tick - (Math.floor(tick/60) -  (Math.floor(tick/3600))*60)*60 - Math.floor(tick/3600)*3600,
            ]);

}, [tick]);

let Time = (timeRemainder, tick, message)=> {
    return tick == 0 ? message : ( `${(timeRemainder[0]<10) ? "0" + timeRemainder[0]: timeRemainder[0]} :  ${(timeRemainder[1]<10) ? "0" + timeRemainder[1]: timeRemainder[1]}  : ${(timeRemainder[2]<10) ? "0" + timeRemainder[2]: timeRemainder[2]}`)
    }

let onStartTimer = () => {
    setStartTimer(true); 
    setTick(time); 
    console.clear(); 
    console.log(`Запуск таймера`)
};    

let onClearTimer = () => {
    console.clear(); 
    setStartTimer(false); 
    setTick(0); 
    setTime(0); 
    setTimeRemainder([0, 0, 0 ]); 
    setSoundEnabledSwitch(true)
    console.log(`Сброс таймера`)
}; 

let form_TimerForm = (startTimer)=> {
    let formDisplay = 
            <fieldset>
                <legend>{textContent.legend}</legend>
                <textarea name="message" value={value} className='timeEvent_textarea' placeholder='Текст напоминания'  onChange={(event)=>{setMessage(event.target.value)}} id='message'></textarea>
                <br/>
                <label>{textContent.label}
                <br/>
                <br/>
                <div className='time_diapasones'>
                    {buttonsDiapasonesHour}
                    <br/>
                    {buttonsDiapasonesMin}
                    <br/>
                    {buttonsDiapasonesSec}
                <br/>
                </div>
                </label>
                <button className='timer_run' onClick={()=>{onStartTimer()}}> 
                    {textContent.button}  
                    {Math.floor(time/3600)} час. {Math.floor(time/60)  -  (Math.floor(time/3600)*60)} мин. { time - (Math.floor(time/60) -  (Math.floor(time/3600))*60)*60 - Math.floor(time/3600)*3600} сек.
                </button>
                <button className='timer_clear' onClick={()=>{ onClearTimer()}}> 
                Сброс таймера
                </button>
            </fieldset>;
    let formHide =  
        <fieldset>
            <legend> {textContent.legendRun} </legend>    
            <div className='ticking'>
                {Time(timeRemainder, tick, message)}
                <br/>
            </div>
            <button className='timer_clear' onClick={()=>{ onClearTimer()}}> 
                Сброс таймера
            </button>
        </fieldset>;
    return  startTimer?formHide:formDisplay;
};



return (
<section>
    <h1>{textContent.titleSection}</h1>
    {form_TimerForm(startTimer)}
</section>
)}
