import {React , useContext} from 'react'
import Button from '../Button/Button'
import { MenuContext } from './Menu'





function MenuButton({ children }) {
  const{toggleOpen} = useContext(MenuContext)
  return (


      <Button 
      onClick={toggleOpen}
        variant="success"
        size='lg'
      >{children}</Button>

  ) 
}

export default MenuButton