import React from 'react'
import ControlPanel from './ControlPanel/ControlPanel'
import ProjectListPanel from './ProjectListPanel/ProjectListPanel'

const ProjectManagement = () => {
  return (
      <div>
          <ProjectListPanel />
          <ControlPanel />
    </div>
  )
}

export default ProjectManagement