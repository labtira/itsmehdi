import { useParams, Link } from 'react-router-dom'
import projectsData from '../data/projects.json'

function ProjectDetails() {
  const { id } = useParams()
  const project = projectsData.projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 xl:p-16">
      <div className="max-w-7xl mx-auto sm:max-w-screen-sm">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            to="/projects" 
            className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#111111] to-[#1A1A1A] border border-[#222222] hover:border-[#333333] transition-all group"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back to Projects</span>
          </Link>
        </div>

        {project ? (
          <div>
            {/* Project Image */}
            <div className="rounded-[24px] overflow-hidden bg-gradient-to-br from-[#111111] to-[#080808] border border-[#1A1A1A] hover:border-[#222222] transition-all duration-300 shadow-lg mb-8">
              <div className="aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="grid gap-8">
              <div className="rounded-[24px] bg-gradient-to-br from-[#111111] to-[#080808] p-6 md:p-8 border border-[#1A1A1A] hover:border-[#222222] transition-colors shadow-lg">
                <h1 className="text-3xl lg:text-5xl font-bold mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-[#111111] to-[#1A1A1A] rounded-lg text-sm border border-[#222222] text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-zinc-500 text-lg mb-8">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-[#111111] to-[#1A1A1A] rounded-xl inline-flex items-center gap-3 hover:from-[#1A1A1A] hover:to-[#222222] transition-all text-lg border border-[#222222] hover:border-[#333333] shadow-md group"
                >
                  Visit Project
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-zinc-500 text-lg">Project not found.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectDetails 