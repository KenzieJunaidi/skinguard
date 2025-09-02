import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import './App.css'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Learn } from './components/Learn';
import { Steps } from './components/Steps';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [])

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />
      <Hero />
      <Learn />
      <Steps />
    </div>
  )
}

export default App
