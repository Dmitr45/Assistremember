// Вызов компонента функции rfc !!!!
import React from 'react'
import logo from './logo.svg';
import Clock from './Clock/Clock';

export default function ReactHeader() {
  return (
    <div className='AppHeader'>
      <Clock/>
       <img src={logo} className="App-logo" alt="logo" />
    </div>       
  )
}