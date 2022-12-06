import React from 'react'

import './controlpanel.scss'

import ControlButton from './ControlButton/ControlButton'

const ControlPanel = () => {
  return (
    <div className='control_panel__wrapper'>
      <ControlButton btnName='Launch Project' />
      <ControlButton btnName='Finish Project' />
      <ControlButton btnName='Reset State' />
    </div>
  )
}

export default ControlPanel