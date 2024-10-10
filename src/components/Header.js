import React, { useState } from 'react';
import { headerNav } from "../contents/indexData"

const Header=()=>{
  const [show, setShow] = useState(false);
  const toggleMenu=()=>{
    setShow((prevShow)=>!prevShow);
  } 

  return(
    <header id="header">
      <div className="header_inner">
        <h1 className="header_logo"><a href="">My portfolio</a></h1>
        <nav className="header_nav" role="navigation" aria-label='메인메뉴'>
          <ul>
            {
              headerNav.map((nav, index)=>(
                <li key={index}>
                  <a href={nav.url}>{nav.title}</a>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className="header_nav_mobile" id="headerToggle" aria-controls="primary-menu" aria-expanded="false">
          <span>btn</span>
        </div>
      </div>
    </header>
  )
}

export default Header;