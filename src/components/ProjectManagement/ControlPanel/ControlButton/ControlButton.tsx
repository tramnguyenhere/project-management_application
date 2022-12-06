import React from 'react'
import './controlbutton.scss'

const ControlButton = ({btnName}:any) => {
  return (
    <button className='control_button__wrapper'>{btnName}</button>
  )
}

export default ControlButton