import React from 'react'
import './Toggle.css'
import { createContext, useContext } from 'react'
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate"
import useToggle from '../../hooks/useToggle'
const ToggleContext = createContext()

export default function Toggle({ children , onToggle = () => {}}) {

  const [on ,toggle] = useToggle() 
    useEffectOnUpdate(onToggle, [on])
  

  return (
    <ToggleContext.Provider value={{ toggle, on }}>
      {children}
    </ToggleContext.Provider>
  )


}

export { ToggleContext }
