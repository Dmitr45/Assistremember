import { useEffect } from 'react';
import './App.css';
import ReactHeader from  './components/header/ReactHeader';
import TimeEvent from './components/input/TimeEvent';
//import axios from 'axios';
const tg = window.Telegram.WebApp;

function App() {

const onClose = () =>{    // Функция закрытия телеграм-приложения
  console.log('Закрыть веб приложение');
  tg.close();
}

useEffect(()=>{
tg.ready(); // Метод сообщает, что приложение полностью проинициализировалость и его можно отрисовывать
}, [])


  return (
    <div>
    <ReactHeader title="AssistRemember"/>
    <main className='App-content _container'>
    { /*  < TimeEvent/> */}
    <button onClick={onClose}>Закрыть</button>
    </main>
    </div>
  );
}

export default App;