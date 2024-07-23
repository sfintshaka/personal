import { useState, useEffect } from "react";
import './Navbar.css';


interface NavbarProps {
  theme: string;
  switchTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, switchTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 800);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 800);
      setIsOpen(false); // Close menu on resize
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="nav-container sticky top-0 z-50 w-full p-4">
      <div className="flex items-center justify-between">
        <div className="logo-container">
          <img className="danny-logo" src="D.jpeg" alt="Dannylogo" />
          <div>
            <p>Danny Sithole</p>
            <p className="hidden md:block">Web Developer, Tech Enthusiast</p>
          </div>
        </div>
        
        {isMobileView ? (
          <div className="menu-icon" onClick={toggleMenu}>
            <img src="/menu.svg" alt="Menu" className="w-6 h-6" />
          </div>
        ) : (
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://drive.google.com/file/d/1L44ZlDE9hhSOmHViYj3ubqCvEXOWDLBA/view?usp=sharing">Resume</a></li>
            <li>
              <button onClick={switchTheme} className="p-2 rounded">
                <img className='moon' src={theme === 'light' ? '/moon.svg' : '/sun.svg'} alt={theme === 'light' ? 'moon' : 'sun'} />
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Mobile menu */}
      {isMobileView && (
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li><a href="https://drive.google.com/file/d/1qW3amKeEzoxrQQlV5Q1BVknuDCYbkGnn/view?usp=drive_link">Resume</a></li>
          <li>
            <button onClick={switchTheme} className="p-2 rounded">
              <img className='moon' src={theme === 'light' ? '/moon.svg' : '/sun.svg'} alt={theme === 'light' ? 'moon' : 'sun'} />
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
