// Вызов компонента функции rfc !!!!
import React from 'react'
import App from '../../App';
import logo from '../logo/logo.svg';
import Clock from '../time/Clock';
import './ReactHeader.css'



export default function ReactHeader(props) {
  return (
    <div className='AppHeader'>
      <Clock/>
      <div className='header_title'> {props.title} </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>       
  )
}