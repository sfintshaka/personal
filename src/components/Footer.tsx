
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer_container w-full'>
      <p>&copy; {currentYear} Daniel Sithole. All Rights Reserved.</p>
      <div className='footer_icons'>
        <a 
          href='https://github.com/sfintshaka' 
          target='_blank' 
          rel='noopener noreferrer'
          aria-label='GitHub Profile'
        >
          <i className='fab fa-github'></i>
        </a>
        {/* Add more icons here if needed */}
      </div>
    </footer>
  );
};

export default Footer;
