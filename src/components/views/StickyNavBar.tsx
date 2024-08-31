import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Hamburger from '../svgs/Hamburger';
import Close from '../svgs/Close';

import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

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
 
  // !! Handle scroll to
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link 
          activeClass="active" 
          to="gallery" 
          smooth={true} 
          offset={-100} 
          duration={200}
          className="flex items-center cursor-pointer"
        >
          Gallery
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal"
      >
       <Link 
          activeClass="active" 
          to="about" 
          smooth={true} 
          offset={-100} 
          duration={200}
          className="flex items-center cursor-pointer"
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link 
          activeClass="active" 
          to="order"
          smooth={true} 
          offset={-100} 
          duration={200}
          className="flex items-center cursor-pointer"
        >
          Order
        </Link>
      </Typography>
    </ul>
  );
 
  return (
    <div className="max-h-[768px] w-full flex flex-col items-center fixed top-0 z-[100] backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 shadow-md bg-white">
      <Navbar color="transparent" className="h-max max-w-[1440px] rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant='h4'
            className="mr-4 cursor-pointer py-1.5 underline font-rokkitt"
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
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
              as="li"
              variant="paragraph"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <Link 
                activeClass="active" 
                to="gallery"
                smooth={true} 
                offset={-100} 
                duration={200}
                className="flex items-center"
                onClick={() => setOpenNav(!openNav)}
                >
                  Gallery
              </Link>
            </Typography>
            <Typography
              as="li"
              variant="paragraph"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <Link 
                activeClass="active" 
                to="about"
                smooth={true} 
                offset={-100} 
                duration={200}
                className="flex items-center"
                onClick={() => setOpenNav(!openNav)}
                >
                  About
              </Link>
            </Typography>
            <Typography
              as="li"
              variant="paragraph"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <Link 
                activeClass="active" 
                to="order"
                smooth={true} 
                offset={-100} 
                duration={200}
                className="flex items-center"
                onClick={() => setOpenNav(!openNav)}
                >
                  Order
              </Link>
            </Typography>
          </ul>
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