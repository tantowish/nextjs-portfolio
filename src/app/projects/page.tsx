import ProjectCard from '@/components/projectCard'
import { Projects } from '@/constants'
import React from 'react'

const ProjectPage = () => {
  return (
    <div 
    style={{ backgroundImage: "url(/mountains.jpg)", overflow:'none' }}
    className='flex flex-wrap items-center justify-center bg-center bg-cover'>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 '>
        {Projects.map((project, index)=>(
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectPage