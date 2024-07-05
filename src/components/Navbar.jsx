import logo from '../assets/logoo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-center py-6 '> 
        <div className='flex flex-shrink-0 items-center '>
            <img src={logo} alt="logo" className='w-[4.5rem] mx-2 h-16' />
        </div>
        {/* <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
          <ul className='flex justify-center gap-6 '>
            <Link to="#" >
              <li>Home</li>
            </Link >
            <Link to="About">
              <li>About</li>
            </Link>
            <Link to="Projects">
              <li>Projects</li>
            </Link>
            <Link to="Contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div> */}
    </nav>
  )
}

export default Navbar
