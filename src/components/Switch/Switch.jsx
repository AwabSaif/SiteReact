import React from 'react'
import './Switch.css'
import { ThemeContext } from '../../App'

export default function Switch() {
  const {toggleTheme} =React.useContext(ThemeContext)
  return (
   <>
    <input onClick={toggleTheme} type="checkbox" id="checkbox"/>
    <label  htmlFor="checkbox" className="switch">
        <div className="powersign"></div>
    </label>
    </>
  )
}
