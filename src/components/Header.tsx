import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const linkList: Array<{ name: string; path: string }> = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Contact", path: "/Contact" }
];

const parentVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-4rem" },
};

const childVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-2rem" },
};

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  function update(latest: number, prev: number): void {
    if (latest < prev) {
      setHidden(false);
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
    }
  }

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      className="bg-navBg/30 text-navText py-4 fixed top-4 left-0 right-0 mx-auto px-6 md:px-12 max-w-screen-2xl mx-16 z-10 rounded-xl shadow-lg backdrop-blur-md"
      style={{
        boxShadow: "var(--shadow-color1) 0px -23px 25px 0px inset, var(--shadow-color2) 0px -36px 30px 0px inset, var(--shadow-color3) 0px -79px 40px 0px inset, var(--shadow-color4) 0px 2px 1px, var(--shadow-color5) 0px 4px 2px, var(--shadow-color5) 0px 8px 4px, var(--shadow-color5) 0px 16px 8px, var(--shadow-color5) 0px 32px 16px"
      }}
      variants={parentVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
        staggerChildren: 0.05,
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2 text-lg font-bold text-highlight">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z" clipRule="evenodd" />
          </svg>
          <span className='uppercase text-highlight'>power fit mdp</span>
        </NavLink>
        <div className="hidden md:flex space-x-8">
          {linkList.map((link, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              transition={{
                ease: [0.1, 0.25, 0.3, 1],
                duration: 0.4,
              }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-highlight transition duration-200 ${isActive ? 'text-highlight' : 'text-white'}`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </div>
        <button className="hidden md:block bg-highlight text-secondary px-4 py-2 rounded-full shadow-lg hover:bg-green-600 hover:text-primary transition duration-200">Login</button>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2 bg-navBg/30 p-4 rounded-3xl shadow-lg">
          {linkList.map((link, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              transition={{
                ease: [0.1, 0.25, 0.3, 1],
                duration: 0.4,
              }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-xl hover:bg-highlight hover:text-secondary transition duration-200 ${isActive ? 'bg-highlight text-secondary' : 'bg-navBg text-white'}`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
          <button className="bg-highlight text-secondary px-4 py-2 rounded-full shadow-lg hover:bg-green-600 hover:text-primary transition duration-200">Login</button>
        </div>
      )}
    </motion.nav>
  );
};

export default Header;
