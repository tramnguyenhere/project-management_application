import React from 'react'
import './controlbutton.scss'

const ControlButton = ({btnName,value, onClick}:any) => {
  return (
    <button className='control_button__wrapper' value={value} onClick={onClick}>{btnName}</button>
  )
}

export default ControlButton