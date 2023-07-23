import React, { useContext } from "react";
import{ uesContxet } from 'react'
import { ToggleContext } from "./Toggle";
import Button from "../Button/Button";

export default function ToggleButton({children}){
    const {toggle }=useContext(ToggleContext)
    
    return(
        <div className="togglr-btn" onClick={toggle}>
            {children}
        </div>
    )
}