import React from 'react'
import './Container.css'
import { useContext } from 'react';
import { ThemeContext } from '../../App'
import Header from '../Header/Header';
import Card from '../Card/Card';



export default function Container() {
    const {theme} = useContext(ThemeContext)
    
  return (
    <>
    <div className={`container ${theme}-theme`}>
        <Header />
        
        <Card/>
      </div>
    </>
  )
}
