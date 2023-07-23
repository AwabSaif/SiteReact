import React from 'react'
import './Star.css'
import Toggle from '../Toggle/index';
import { BsStar, BsStarFill } from "react-icons/bs"
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import useToggle from '../../hooks/useToggle';

export default function Star({}) {
  const [on, toggle] = useToggle()

  return (
    <>{
      on ? 
      <FcLike  onClick={toggle} className="star filled" />:
      <FcLikePlaceholder  onClick={toggle} className="star" />
    }
   
     </>
  )
}
