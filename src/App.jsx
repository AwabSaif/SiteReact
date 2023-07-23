import './App.css'
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Router , Route } from 'react-router-dom';
import Home from './Page/Home/Home';


const ThemeContext = React.createContext()

export default function App() {
  const [theme, setTheme] = useState("dark")
  function toggleTheme() {
    setTheme(prev => prev === "light" ? "dark" : "light")
  }
  return (
    <BrowserRouter>
    <Router>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <Route path='/' element={<Home/>} />
    

    

    </ThemeContext.Provider>
    </Router>
    </BrowserRouter>
  )
}

export { ThemeContext }