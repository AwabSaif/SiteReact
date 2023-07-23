import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import Menu from '../Menu/index';
import { ThemeContext } from '../../App';
import Switch from '../Switch/Switch';
import AvatarImg from "../../assets/images/my photo-.png"


export default function Header() {
  const { theme } = React.useContext(ThemeContext)



  return (
    <header className={theme + "-theme"}>
     <Avatar src={AvatarImg} alt="Awab saif" />
      <h1>{theme === "light" ? "Light" : "Dark"} Theme</h1>

      
    <div className="nav">
      <Link to=''>Home</Link>
      <Link to=''>About</Link>
      <Link to=''>Contact</Link>
    </div>

   {/*    <Menu onOpen={() => console.log("Opened/closed")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu> */}
    

      <Switch />
    </header>
  )
}
