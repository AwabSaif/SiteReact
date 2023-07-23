import React from 'react'
import './Avatar.css'
import { IoPersonSharp } from "react-icons/io5"



export default function Avatar({children ,onClick ,src,alt}) {
    if(src){
        return(
            <div onClick={onClick}  className="avatar">
            <img src={src} alt={alt} />
        </div>
        )
    }
    if(children){
        return(
            <div onClick={onClick} className='avatar avatar-letters'>
                {children}
            </div>
        )
    }
    else{
        return(
            <div onClick={onClick}  className='avatar avatar-icon' >
                <IoPersonSharp/>

            </div>
        )
    }
  
}
