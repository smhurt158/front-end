import React from 'react'
import { useState } from 'react';
const MenuItem = ({
    title,
    children,
    link
}) => {
    const handleMouseEnter = () => {
        setDropdownVisible(true);
      };
    
      const handleMouseLeave = () => {
        setDropdownVisible(false);
      };
      const [isDropdownVisible, setDropdownVisible] = useState(false);
    
  return (
    <div
        className="menu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        <button>{link? <a href={link}>{title}</a>:title}</button>
        {/* <DropdownMenu /> */}
        {children && isDropdownVisible?
            <div className="drop-down">
                {children}
            </div>
            :
            ""
        }
    </div>
  )
}

export default MenuItem