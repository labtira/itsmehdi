import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import projectsData from '../data/projects.json'
import logo1 from '../assets/img/logo1.png'

function Projects() {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeCategory, setActiveCategory] = useState('all')
  const [isAnimating, setIsAnimating] = useState(false)
  const projectsPerPage = 4

  // Filter projects by category
  const filteredProjects = activeCategory === 'all' 
    ? projectsData.projects 
    : projectsData.projects.filter(project => project.category === activeCategory)

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Handle category change with animation
  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveCategory(category)
        setCurrentPage(1)
        setIsAnimating(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 300)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 xl:p-16">
      <div className="max-w-7xl mx-auto md:max-w-screen-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            to="/" 
            className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#111111] to-[#1A1A1A] border border-[#222222] hover:border-[#333333] transition-all group"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center items-center mb-5">
          <div className="bg-gradient-to-r from-[#111111] to-[#080808] p-1.5 rounded-full border border-[#1A1A1A] backdrop-blur-lg">
            <div className="flex items-center">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`relative flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === 'all' 
                    ? 'text-white bg-gradient-to-r from-[#1A1A1A] to-[#222222] shadow-lg' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <i className="fas fa-th-large"></i>
                <span>All</span>
              </button>
              <button
                onClick={() => handleCategoryChange('web')}
                className={`relative flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === 'web' 
                    ? 'text-white bg-gradient-to-r from-[#1A1A1A] to-[#222222] shadow-lg' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <i className="fas fa-code"></i>
                <span>Web</span>
              </button>
              <button
                onClick={() => handleCategoryChange('design')}
                className={`relative flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === 'design' 
                    ? 'text-white bg-gradient-to-r from-[#1A1A1A] to-[#222222] shadow-lg' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <i className="fas fa-paint-brush"></i>
                <span>Design</span>
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {currentProjects.map((project) => (
            <div 
              key={project.id} 
              className={`rounded-[24px] overflow-hidden bg-gradient-to-br from-[#111111] to-[#080808] border-2 border-[#1A1A1A] hover:border-[#222222] transition-all duration-300 shadow-lg group ${
                isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <div className="aspect-video">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-[#111111] to-[#1A1A1A] rounded-lg text-sm border border-[#222222] text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold my-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {project.title}
                </h3>
                <p className="text-zinc-500 mb-6 text-base">
                  {project.description}
                </p>
                <Link 
                  to={`/projects/${project.id}`}
                  className="p-4 bg-gradient-to-r from-[#111111] to-[#1A1A1A] rounded-xl hover:from-[#1A1A1A] hover:to-[#222222] transition-all border border-[#222222] hover:border-[#333333] shadow-md group inline-flex"
                >
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-lg text-sm border ${
                currentPage === number
                  ? 'bg-gradient-to-r from-[#1A1A1A] to-[#222222] border-[#333333] text-white'
                  : 'bg-gradient-to-r from-[#111111] to-[#1A1A1A] border-[#222222] text-zinc-500 hover:border-[#333333]'
              } transition-all`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects 