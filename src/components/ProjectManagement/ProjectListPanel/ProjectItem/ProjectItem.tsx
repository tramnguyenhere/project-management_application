import { ProgressState } from '../../../../types/type'
import './projectitem.scss'
import { ItemDataType } from '../../../../types/type'

const ProjectItem = ({ data }: ItemDataType) => {
  const classNameState = data.state === ProgressState.LAUNCHED
    ? 'launched'
    : data.state === ProgressState.FINISHED
      ? 'finished'
      : 'not_started'
  

  
  return (
    <div className='project-item__wrapper'>
      <div className='project-item__details' id={String(data.id)} >
        <span className='project-item__name' id={String(data.id)}>{data.name}</span>
        <span className='project-item__state' id={String(data.id)}>{data.state}</span>
      </div>
      <div className={`project-item__badget ${classNameState}`}></div>
    </div>
  )
}

export default ProjectItem