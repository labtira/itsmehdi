import logo1 from '../assets/img/logo1.png'
import { Link, useLocation } from 'react-router-dom'

function LogoNavbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="fixed top-0 right-0 left-0 z-50 py-4 px-8 ">
     <Link 
            to="/" 
            >
             <div className='w-full rounded-[16px] flex justify-center items-center transition-all duration-500 backdrop-blur-xl bg-gradient-to-b from-black/10 to-black/30 border  border-[#222222] shadow-[0_-8px_32px_rgba(0,0,0,0.12)] py-4  md:mx-auto md:max-w-screen-sm'>
          <img src={logo1} alt="Logo" className="h-10" />
          </div>
          </Link>
    </div>
  )
}

export default LogoNavbar