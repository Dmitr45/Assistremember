import './App.css';
import ReactHeader from  './components/header/ReactHeader';
import TimeEvent from './components/input/TimeEvent';
//import axios from 'axios';

function App() {
  return (
    <div>
    <ReactHeader title="AssistRemember"/>
    <main className='App-content _container'>
      < TimeEvent/>
    </main>

    </div>
  );
}

export default App;