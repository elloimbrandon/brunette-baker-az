import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Hamburger from './svgs/Hamburger';
import Close from './svgs/Close';

const StickyNavbar = () =>  {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#order" className="flex items-center">
          Order
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className={`w-full transition-all duration-300 ${openNav ? 'pt-[199px]' : 'pt-[50px] md:pt-[55px] lg:pt-[75px]'}`}>
      <Navbar blurred={true} className="fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#home"
            variant='h5'
            className="mr-4 cursor-pointer py-1.5 underline"
          >
            The Brunette Baker
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-4">
              <IconButton color="black" ripple={true} className="text-lg hidden lg:inline-block">
                <FontAwesomeIcon icon={faInstagram} size="xl" color="white" />
              </IconButton>
              <IconButton color="black" ripple={true} className="text-lg hidden lg:inline-block">
                <FontAwesomeIcon icon={faTiktok} size="xl" color="white" />
              </IconButton>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <Close/>
              ) : (
                <Hamburger/>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <IconButton fullWidth color="black" ripple={true}>
                  <FontAwesomeIcon icon={faInstagram} size="xl" color="white" />
                </IconButton>
                <IconButton fullWidth color="black" ripple={true}>
                  <FontAwesomeIcon icon={faTiktok} size="xl" color="white" />
            </IconButton>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default StickyNavbar;