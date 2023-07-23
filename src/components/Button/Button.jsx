import React from "react"
import './Button.css'
import classnames from "classnames"
import { ThemeContext } from "../../App"

export default function Button({ children, className, size, variant, ...rest }) {
    let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`
    const {theme ,toggleTheme} =React.useContext(ThemeContext)
    const allClasses = classnames(sizeClass,  `${theme}-theme` ,variantClass, className)
    return (
        <button className={allClasses}   {...rest}>
            {children}
        </button>
    )
}