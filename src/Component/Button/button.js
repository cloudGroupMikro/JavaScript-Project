import React from "react";
import './button.css'
const styles=['primary']
const size=['medium']
export const Button=({
    childern,
    onClick,
    radius,
    butStyle,
    butSize
})=>{
    const checkStyle=styles.includes(butStyle) ? butStyle:styles[0]
    const checkSize=size.includes(butSize)?butSize:size[0]
    return(
        <button className={`btn ${checkStyle} ${checkSize}`} onClick={onClick} >
            {childern}
        </button>
        
    )
}
