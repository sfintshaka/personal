import './App.css'

import useLocalStorage from 'use-local-storage'
import Navbar from './components/Navbar';



const App = () => {

const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
const switchTheme =()=> {
 const newTheme = theme ==='light'?'dark':'light';
 setTheme(newTheme);
};



  return (
    <div className='App' data-theme={theme}>
      <a onClick={switchTheme}>
      <img 
          src={theme === 'light' ? '/moon.svg' : '/sun.svg'} 
          alt={theme === 'light' ? 'moon' : 'sun'} 
        />
        </a>

      <Navbar/>    
    </div>
  )
}

export default App