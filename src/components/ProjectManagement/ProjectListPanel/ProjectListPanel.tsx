import { ProjectItemType } from '../../../types/type'
import { useAppSelector } from '../../../redux/hooks'
import { RootState } from '../../../redux/store'

import './projectlistpanel.scss'

import ProjectItem from './ProjectItem/ProjectItem'
import { useState } from 'react'

const ProjectListPanel = () => {
  const [selectedItems, setSelectedItems] = useState<any>([])
  const projectData = useAppSelector((state: RootState) => state.projectlist.data)

  const selectionHandler = (e: any) => {
    e.preventDefault()
    // e.target.style.backgroundColor = '#308CCD'
    
    const itemId = Number(e.target.id); 
    const selectedItem = projectData.find(p => p.id === itemId)
    const isDuplicated = selectedItems.find((p: ProjectItemType) => p.id === selectedItem?.id)
    if (isDuplicated) {
      
      setSelectedItems(selectedItems.filter((p: ProjectItemType) => p.id !== itemId));
      e.target.style.backgroundColor = '#fff'
    }
    else {
      setSelectedItems(selectedItems.concat(selectedItem));
      e.target.style.backgroundColor = '#308CCD'
    }
    
  }
  console.log(selectedItems);
  
  return (
      <ul className='project-list__wrapper'>
      {projectData.map((project: ProjectItemType) => (<button onClick={selectionHandler} key={project.id}><ProjectItem data={project} /></button>))}
      </ul>
  )
}

export default ProjectListPanel