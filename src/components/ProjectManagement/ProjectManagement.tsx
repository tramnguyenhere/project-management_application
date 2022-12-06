

import './projectmanagement.scss'

import ControlPanel from './ControlPanel/ControlPanel'
import ProjectListPanel from './ProjectListPanel/ProjectListPanel'

const ProjectManagement = () => {
  return (
      <div className='project_management__wrapper'>
          <ProjectListPanel />
          <ControlPanel />
    </div>
  )
}

export default ProjectManagement