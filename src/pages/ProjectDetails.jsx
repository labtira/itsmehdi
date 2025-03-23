import { useParams, Link } from 'react-router-dom'
import projectsData from '../data/projects.json'
import Footer from '../components/Footer'
import LogoNavbar from '../components/LogoNavbar'

function ProjectDetails() {
  const { id } = useParams()
  const project = projectsData.projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="text-white p-4 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link 
            to="/projects" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    )
  }
else {  
  return (
    <main className=" text-white md:p-4" role="main">
      <div className="w-full mx-auto md:px-16 md:max-w-screen-md px-5 pt-4">
        <LogoNavbar />
        
        {project ? (
          <div>
            {/* Project Image */}
            <section className="rounded-[16px] overflow-hidden transition-all duration-500 backdrop-blur-xl bg-gradient-to-b from-black/10 to-black/30  shadow-[0_-8px_32px_rgba(0,0,0,0.12)] border border-[#282828]  mb-8 mt-24 md:mt-20" aria-label="Project showcase image">
              <div className="aspect-video">
                <img 
                  src={project.image} 
                  alt={`Detailed view of ${project.title} project`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            {/* Project Info */}
            <section className="grid gap-8 mb-14" aria-label="Project details">
              <article className="rounded-[16px] transition-all duration-500 backdrop-blur-xl bg-gradient-to-b from-black/10 to-black/30  shadow-[0_-8px_32px_rgba(0,0,0,0.12)] p-6 md:p-8 border border-[#282828] ">
                <h1 className="text-xl lg:text-3xl font-bold mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      role="listitem"
                      className="px-3 py-1.5 bg-darkgrey/30 rounded-lg text-sm  text-zinc-500"
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
                  className="px-8 py-2 bg-darkgrey/30 rounded-md inline-flex items-center gap-3 hover:from-[#1A1A1A] hover:to-[#282828] transition-all text-sm border border-[#282828] hover:border-[#333333] shadow-md group"
                  aria-label={`Visit ${project.title} project website`}
                >
                  Visit Project
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </article>
            </section>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-zinc-500 text-lg">Project not found.</p>
          </div>
        )}
        <Footer/>
      </div>
      
    </main>
  )
}
}

export default ProjectDetails