import React from 'react'

import './projectlistpanel.scss'

import ProjectItem from './ProjectItem/ProjectItem'
import projectData from '../../../data'
import { ProjectItemType } from '../../../types/type'

const ProjectListPanel = () => {
  return (
      <ul className='project-list__wrapper'>
        {projectData.map((project: ProjectItemType) => (<li key={project.id}><button><ProjectItem data={project} /></button></li>))}
      </ul>
  )
}

export default ProjectListPanel