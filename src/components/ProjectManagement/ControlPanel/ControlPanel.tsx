import React from 'react'

import './controlpanel.scss'

import ControlButton from './ControlButton/ControlButton'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { RootState } from '../../../redux/store'
import { ProgressState, ProjectItemType } from '../../../types/type'
import { changeStateSelectedList, setSelectedList } from '../../../redux/features/projectSlice'


const ControlPanel = () => {
  const selectedProjects = useAppSelector((state: RootState) => state.projectlist.selectedData)
  const dispatch = useAppDispatch()
  const controlButtons = [
    {
      id: 1,
      name: 'Launch Project',
      changeStateTo: ProgressState.LAUNCHED 
    },
    {
      id: 2,
      name: 'Finish Project',
      changeStateTo: ProgressState.FINISHED
    },
    {
      id: 3,
      name: 'Reset State',
      changeStateTo: ProgressState.NOT_STARTED
    },
  ]

  const stateHandler = (e: any) => {
    selectedProjects.forEach((p: ProjectItemType) => {
      dispatch(changeStateSelectedList({ state: e.target.value, id: p.id }))
    })
    dispatch(setSelectedList([]))
  }
  
  console.log(selectedProjects);
  
  return (
    <div className='control_panel__wrapper'>
      {controlButtons.map(btn => (
        <ControlButton value={btn.changeStateTo} key={btn.id} btnName={btn.name} onClick={stateHandler} />
      ))}
    </div>
  )
}

export default ControlPanel