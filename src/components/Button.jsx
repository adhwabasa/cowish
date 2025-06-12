import React from 'react'

const Button = ({outline, content = "text here", custom, event}) => {
    const type = {
        primary: "text-white bg-primary hover:shadow-lg",
        outline: "bg-transparent hover:text-white text-primary border border-primary hover:bg-text hover:border-text hover:shadow-lg" 
    }
  return (
    <button className={`${outline ? type.outline : type.primary} ${custom} px-3 py-1 rounded-2xl transition-all duration-150 text-base font-heading`} onClick={event}>{content}</button>
  )
}

export default Button
