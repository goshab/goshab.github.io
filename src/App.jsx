import './App.css'

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';

import useLocalStorage from 'use-local-storage'

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
  }

  return (
    <div className="app" data-theme={theme}>
      <Sidebar theme={theme} switchTheme={switchTheme} />
      <main className='main'>
          <Home />
          <About />
          <Services />
          <Portfolio />
          {/* <Contact theme={theme} /> */}
          {/* <Services />
          <Portfolio />
          <Testimonials />
          <Blog />*/}
        <center>&copy; Copyright 2024 - 2025. Designed and Developed by Belenkiy Services Inc.</center>
      </main>
    </div>
);
}

export default App
