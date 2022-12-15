// Компонент для планированя времени сбытия (напоминания)

import React from 'react'
import './timeEvent.css'

export default function TimeEvent() {
    let tickingStyle = {textAlign: 'center', fontSize: 60};

    let textContent = {
    titleSection : 'Таймер',
    legend : 'Давайте запланируем напоминание!',
    message : 'Твое время вышло:)',
    label: 'Через сколько напомнить?',
    button : 'Запустить таймер на: ',
    }

    let timeDiapason = {
            Sec: [ 1, 5, 10, 15, 30, 40, 45],
            Min: [ 1, 5, 10, 15, 30, 40, 45],
            Hour: [ 1, 3, 6, 9, 12, 16, 24]
    }

    let buttonsDiapasonesSec = timeDiapason.Sec.map( item => <button className='button-timeDiapasonS' onClick={()=>{ setTime(time+item); }}>+{item} Sec.</button>);
    let buttonsDiapasonesMin = timeDiapason.Min.map( item => <button className='button-timeDiapasonM' onClick={()=>{ setTime(time+item*60); }}>+{item} Min.</button>);
    let buttonsDiapasonesHour= timeDiapason.Hour.map( item =><button className='button-timeDiapasonH' onClick={()=>{ setTime(time+item*3600); }}>+{item} Hour</button>);


    let [message, setMessage] = React.useState(textContent.message);
    let [i,setI] = React.useState(0);
    let [tick,setTick] = React.useState(0);
    const [time, setTime] = React. useState(0);
    let [timeRemainder, setTimeRemainder] = React.useState( [ 0, 0, 0] );
    // let [startTimer, setStartTimer] = React.useState(false);
    //let [ticking, setTicking] = React.useState();
    let value;

    //if (tick == 0) { alert('Время пришло!!!')} ;

React.useEffect(()=>{
    if (tick >= 0) {    
    console.clear()
    console.log([message, time, i]);    
    let interval = setInterval(()=>{
    setTick(tick--);
    } , 1000);
    return  () => clearInterval(interval)
} else if (tick < 0) {setTick(0)}
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


return (
<section>
    <h1>{textContent.titleSection}</h1>
    <fieldset>
    <legend>{textContent.legend}</legend>
    <textarea name="message" value={value} className='timeEvent_textarea' placeholder='Текст напоминания'  onChange={(event)=>{setMessage(event.target.value)}} id='message'></textarea>
    <br/>
    <label>{textContent.label}
    <br/>
    <br/>
    <div className='time_diapasones'>{buttonsDiapasonesHour}</div>
    <br/>
    <div className='time_diapasones'>{buttonsDiapasonesMin}</div>
    <br/>
    <div className='time_diapasones'>{buttonsDiapasonesSec}</div>
    <br/>
    </label>
    <button className='timer_run' onClick={()=>{ console.clear(); setI(i++);   setTick(time); console.log(`Запуск таймера № ${i}`)}}> 
        {textContent.button}  
        {Math.floor(time/3600)} час. {Math.floor(time/60)  -  (Math.floor(time/3600)*60)} мин. { time - (Math.floor(time/60) -  (Math.floor(time/3600))*60)*60 - Math.floor(time/3600)*3600} сек.
    </button>
    <button className='timer_clear' onClick={()=>{ console.clear(); setI(i++);   setTick(0); setTime(0); setTimeRemainder([0, 0, 0 ]); console.log(`Сброс таймера № ${i}`)}}> 
    Сброс таймера
    </button>
    </fieldset>
    <h1 style={tickingStyle}>
    {Time(timeRemainder, tick, message)}
    <br/>
    </h1>
</section>
)}
