// Компонент для планированя времени сбытия (напоминания)

import React from 'react'

export default function TimeEvent() {
    let titleSection = 'Таймер';
    let legend = 'Давайте засечем время';
    let [value, setValue ]= React.useState(10);
    let [startTimer, setStartTimer] = React.useState(false);
    let [ticking, setTicking] = React.useState();
    let tickingStyle = {textAlign: 'center', fontSize: 60};

    React.useEffect ( ()=>{
        //console.clear();
    if (startTimer) {
    console.log('Запуск таймера');
    setTicking(value);
    let interval  = setInterval(()=>{

        return clearInterval(interval)
    } , 3000)
}else console.log("ждем")

}, [startTimer]);

return (
<section>
    <h1>{titleSection}</h1>
    <form >
    <fieldset>
    <legend>{legend}</legend>
    <label>Через сколько минут напомнить? <input value={value} onChange={(event)=>{setValue(event.target.value)}} className='timeEvent__input' name="timeRange" ></input></label>
    <button onClick={(event)=> {setStartTimer(true) }}>Запустить таймер</button> 
    </fieldset>
    </form>

    <h1 style={tickingStyle}>{ticking}</h1>
</section>
)}
