import {React , useContext} from 'react'
import { MenuContext } from './Menu'


export const MenuDropdown = ({ children }) => {
  const {open } = useContext(MenuContext)

  return open ?(

      <div className="menu-dropdown">
        {children}
      </div>
   
  ):null
}
