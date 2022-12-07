import { ProjectItemType } from '../../../types/type'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { RootState } from '../../../redux/store'
import { removeSelectedItem, setSelectedList } from '../../../redux/features/projectSlice'
import './projectlistpanel.scss'

import ProjectItem from './ProjectItem/ProjectItem'

const ProjectListPanel = () => {
  const projectData = useAppSelector((state: RootState) => state.projectlist.data)
  const selectedProjectData = useAppSelector((state:RootState)=>state.projectlist.selectedData)
  const dispatch = useAppDispatch()
  
  const selectionHandler = (e: any) => {
    e.preventDefault()
    const itemId = Number(e.target.id); 
    const selectedItem: any= projectData.find((p:ProjectItemType) => p.id === itemId)
    const isDuplicated = Boolean(selectedProjectData.find((p: ProjectItemType) => p.id === selectedItem?.id))
    if (!isDuplicated) {
      dispatch(setSelectedList(selectedItem));
    } else {
      dispatch(removeSelectedItem(selectedItem));
    }
  }

  return (
      <div className='project-list__wrapper'>
      {projectData.map((project: ProjectItemType) => (<button onClick={selectionHandler} key={project.id}><ProjectItem data={project} /></button>))}
      </div>
  )
}

export default ProjectListPanel