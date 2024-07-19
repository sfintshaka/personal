import './App.css';
import useLocalStorage from 'use-local-storage';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <main className='App' data-theme={theme}>
      <Navbar theme={theme} switchTheme={switchTheme} />
      <About />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer/>
    </main>
  );
}

export default App;
