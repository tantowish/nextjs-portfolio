import ProjectCard from '@/components/projectCard'
import { Projects } from '@/constants'
import React from 'react'

const ProjectPage = () => {
  return (
    <div 
    style={{ backgroundImage: "url(/mountains.jpg)" }}
    className='w-screen h-screen flex flex-wrap items-center justify-center bg-center bg-cover'>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
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