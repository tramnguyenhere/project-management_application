import React from 'react'
import { ProgressState } from '../../../../types/type'
import './projectitem.scss'

const projectItem = ({ data }: any) => {
  

  return (
    <div className='project-item__wrapper'>
      <div className='project-item__details'>
        <span className='project-item__name'>{data.name}</span>
        <span className='project-item__state'>{data.state}</span></div>
      <div className={`project-item__badget ${data.state===ProgressState.LAUNCHED ? 'launched' : data.state === ProgressState.FINISHED ? 'finished' : 'not_started'}`}></div>
    </div>
  )
}

export default projectItem