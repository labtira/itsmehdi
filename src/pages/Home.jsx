import { useState } from 'react'
import { Link } from 'react-router-dom'
import gif from '../assets/img/gif1.gif'
import logo1 from '../assets/img/logo1.png'
import projectsData from '../data/projects.json'

function Home() {
  // Get first 4 projects
  const featuredProjects = projectsData.projects.slice(0, 4)

  return (
    <div className=" bg-black text-white">
      <div className="max-w-full md:max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 xl:py-20">

        {/* Services Section */}
        <div className="flex flex-col md:flex-row gap-6  mb-6 ">
          {/* Services Card */}
          <div className="rounded-[24px] bg-gradient-to-br from-[#111111] to-[#080808] p-4 flex flex-row items-center gap-3  border-2 border-[#1A1A1A] hover:border-[#222222] transition-colors shadow-lg flex-grow">
            <div className="w-[80px] aspect-square rounded-[16px] overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#111111] shadow-xl">
              <img 
                src={logo1}
                alt="Landscape" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="px-4 py-2 bg-gradient-to-r from-[#111111] to-[#1A1A1A] rounded-lg text-xs  border border-[#222222] hover:border-[#333333] transition-colors shadow-md">Software Engineering</span>
              <span className="px-4 py-2 bg-gradient-to-r from-[#111111] to-[#1A1A1A] rounded-lg text-xs  border border-[#222222] hover:border-[#333333] transition-colors shadow-md">Graphic Design</span>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="rounded-[24px] bg-gradient-to-br from-[#111111] to-[#080808] p-4 border-2 border-[#1A1A1A] hover:border-[#222222] transition-colors shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Connect With Me</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://www.instagram.com/itsmehdi.co/" 
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#111111] to-[#1A1A1A] flex items-center justify-center border border-[#222222] hover:border-[#333333] transition-all hover:scale-105 focus:outline-none"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/mehdilabtira/" 
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#111111] to-[#1A1A1A] flex items-center justify-center border border-[#222222] hover:border-[#333333] transition-all hover:scale-105 focus:outline-none"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="https://x.com/01mehdi_" 
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#111111] to-[#1A1A1A] flex items-center justify-center border border-[#222222] hover:border-[#333333] transition-all hover:scale-105 focus:outline-none"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a 
                href="https://wa.me/212707547044" 
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#111111] to-[#1A1A1A] flex items-center justify-center border border-[#222222] hover:border-[#333333] transition-all hover:scale-105 focus:outline-none"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
              <a 
                href="https://github.com/labtira" 
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#111111] to-[#1A1A1A] flex items-center justify-center border border-[#222222] hover:border-[#333333] transition-all hover:scale-105 focus:outline-none"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Web Dev Section */}
        <div className="rounded-[24px] bg-gradient-to-br from-[#111111] to-[#080808] p-5 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 lg:mb-12 border-2 border-[#1A1A1A] hover:border-[#222222] transition-colors shadow-lg">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">itsmehdi.co</h2>
            <p className="text-zinc-500 mb-8 lg:mb-10 text-sm xl:text-base max-w-xl">
              I blend the precision of software engineering with the creativity of graphic design to craft exceptional digital experiences. From elegant code to stunning visuals, I transform ideas into reality.
            </p>
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-8 py-2 bg-gradient-to-r from-[#111111] to-[#1A1A1A] rounded-lg flex items-center justify-center gap-3 hover:from-[#1A1A1A] hover:to-[#222222] transition-all text-base lg:text-lg border border-[#222222] hover:border-[#333333] shadow-md group focus:outline-none"
            >
              Get In Touch
              <svg className="w-5 h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className="rounded-[20px] overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#111111] shadow-xl aspect-video lg:aspect-square">
            <img 
              src={gif} 
              alt="Landscape" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16 lg:mb-24">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl  font-bold mb-4 lg:mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              PROJECTS
            </h2>
            <p className="text-zinc-500 text-lg xl:text-xl max-w-2xl mx-auto">
              Browse our amazing projects and discover the universe of creativity
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="rounded-[24px] overflow-hidden bg-gradient-to-br from-[#111111] to-[#080808] border-2 border-[#1A1A1A] hover:border-[#222222] transition-all duration-300 shadow-lg group">
                <div className="aspect-video">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
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
                  <p className="text-zinc-500 mb-6 text-xs">
                    {project.description}
                  </p>
                  <Link 
                    to={`/projects/${project.id}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="p-4 bg-gradient-to-r from-[#111111] to-[#1A1A1A] rounded-xl hover:from-[#1A1A1A] hover:to-[#222222] transition-all border border-[#222222] hover:border-[#333333] shadow-md group inline-flex focus:outline-none"
                  >
                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="flex justify-center">
            <Link 
              to="/projects"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-6 py-2 bg-gradient-to-r from-[#111111] to-[#1A1A1A] rounded-lg flex items-center gap-3 hover:from-[#1A1A1A] hover:to-[#222222] transition-all text-md border border-[#222222] hover:border-[#333333] shadow-md group focus:outline-none"
            >
              More
              <svg className="w-5 h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
