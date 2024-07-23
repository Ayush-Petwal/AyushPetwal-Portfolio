import logo from '../assets/logoo.png';
import {useState} from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLinkClick = (e , href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if(targetElement){
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top; 
      const offsetPosition = elementPosition + window.scrollY + offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false); 
  }
  return (
    <nav className='fixed left-0 right-0 top-4 z-50 '>
        <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex'>
            <div className='flex justify-between gap-6'>
                <div>
                  <a href="#">
                    <img src={logo} alt="logo" width={30} className=' mx-2 ' />
                  </a>
                </div>
                <div>
                  <ul className='flex items-center gap-4'>
                     {NAVIGATION_LINKS.map((item , index) => (
                       <li key={index}>
                        <a href={item.href} className='text-sm hover:text-yellow-400 ' onClick={(e) => handleLinkClick(e , item.href) }>
                          {item.label}
                        </a>
                       </li>
                     ))}
                  </ul>
                </div>
            </div>
        </div>

        <div className='rounded-lg backdrop-blur-md lg:hidden '>
          <div className='flex items-center justify-between mx-5'>
            <div>
              <a href="#">
              <img src={logo} alt="logo" width={30} className=' m-2 ' />
              </a>
            </div>
            <div className='flex items-center'>
               <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}> 
                    {isMobileMenuOpen ? (
                      <FaTimes className='m-2 h-6 w-5' />
                    ) : (
                      < FaBars className='m-2 h-6 w-5' />
                    )}
               </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className='flex flex-col gap-4 backdrop-blur-md ml-4 mt-4'>
              {NAVIGATION_LINKS.map((item , index) => (
                <li key={index}>
                  <a className='block w-full text-xl font-semibold ' href={item.href} onClick={(e) => handleLinkClick(e , item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul> 
          )}
        </div>      
    </nav>
  )
}

export default Navbar
