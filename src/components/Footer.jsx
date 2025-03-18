import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="">
      <div className="max-w-full md:max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* About Card */}
          <div className="rounded-[24px] bg-gradient-to-br from-[#111111] to-[#080808] p-6 border-2 border-[#1A1A1A] hover:border-[#222222] transition-colors shadow-lg">
          <h4 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">About Me</h4>
          <p className="text-zinc-500 text-sm mb-6">Passionate software engineer crafting elegant solutions to complex problems.</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/itsmehdi.co/" className="w-12 h-12 rounded-full bg-gradient-to-r from-[#111111] to-[#1A1A1A] flex items-center justify-center border border-[#222222] hover:border-[#333333] transition-all hover:scale-105 focus:outline-none">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/mehdilabtira/" className="w-12 h-12 rounded-full bg-gradient-to-r from-[#111111] to-[#1A1A1A] flex items-center justify-center border border-[#222222] hover:border-[#333333] transition-all hover:scale-105 focus:outline-none">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://x.com/01mehdi_" className="w-12 h-12 rounded-full bg-gradient-to-r from-[#111111] to-[#1A1A1A] flex items-center justify-center border border-[#222222] hover:border-[#333333] transition-all hover:scale-105 focus:outline-none">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://wa.me/212707547044" className="w-12 h-12 rounded-full bg-gradient-to-r from-[#111111] to-[#1A1A1A] flex items-center justify-center border border-[#222222] hover:border-[#333333] transition-all hover:scale-105 focus:outline-none">
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>                                    

        {/* Quick Links Card */}
        <div className="rounded-[24px] bg-gradient-to-br from-[#111111] to-[#080808] p-6 border-2 border-[#1A1A1A] hover:border-[#222222] transition-colors shadow-lg">
          <h4 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <Link 
                to="/projects" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-zinc-500 hover:text-white transition-colors flex items-center gap-3 text-lg group focus:outline-none"
              >
                <i className="fas fa-code"></i>
                <span>Projects</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </li>
            <li>
              <a 
                href="#" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-zinc-500 hover:text-white transition-colors flex items-center gap-3 text-lg group focus:outline-none"
              >
                <i className="fas fa-laptop-code"></i>
                <span>Services</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-zinc-500 hover:text-white transition-colors flex items-center gap-3 text-lg group focus:outline-none"
              >
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Card */}
        {/* <div className="rounded-[24px] bg-gradient-to-br from-[#111111] to-[#080808] p-6 border-2 border-[#1A1A1A] hover:border-[#222222] transition-colors shadow-lg">
          <h4 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-zinc-500 text-sm">
              <a href="mailto:itsmehdi.co.0707547044@gmail.com" className='hover:text-white transition-colors flex items-center gap-3'>
                <i className="fas fa-envelope"></i>
                <span> itsmehdi.co.0707547044@gmail.com</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-zinc-500 text-sm">
              <a href="tel:+212707547044" className='hover:text-white transition-colors flex items-center gap-3'>
                <i className="fas fa-phone"></i>
                <span> +212 707 547 044</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-zinc-500 text-sm">
              <i className="fas fa-map-marker-alt"></i>
              <span>Casablanca, Morocco</span>
            </li>
          </ul>
        </div> */}

        {/* Newsletter Card */}
        {/* <div className="rounded-[24px] bg-gradient-to-br from-[#111111] to-[#080808] p-6 border-2 border-[#1A1A1A] hover:border-[#222222] transition-colors shadow-lg">
          <h4 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Newsletter</h4>
          <p className="text-zinc-500 text-sm mb-6">Subscribe to receive updates and news.</p>
          <div className="flex gap-3">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="bg-[#1A1A1A] border border-[#333333] rounded-xl px-4 py-3 text-base flex-grow focus:outline-none focus:border-[#444444] hover:border-[#444444] placeholder-zinc-600 transition-colors"
            />
            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#111111] to-[#1A1A1A] flex items-center justify-center border border-[#222222] hover:border-[#333333] transition-all hover:scale-105 focus:outline-none">
              <i className="fas fa-paper-plane text-xl"></i>
            </button>
          </div>
        </div> */}
      </div>

      {/* Copyright */}
      <div className="mt-8 mb-40 text-center">
        <p className="text-zinc-500 text-lg">
          © {new Date().getFullYear()} MEHDI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer 