import React from 'react'
import useToggle from '../../hooks/useToggle'
import './Menu.css'
import { createContext } from 'react'


const MenuContext =createContext()

export default function Menu({ children ,onOpen }) {
  const [open ,toggleOpen] = useToggle(true ,onOpen)

  return (
      <MenuContext.Provider value={{open ,toggleOpen}}>

      <div className="menu">
        {children}
      </div>
      </MenuContext.Provider>
   
  )
}

export {MenuContext}