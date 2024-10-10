import React from 'react';

const Header=()=>{
  return(
    <header id="header">
      <div className="header_inner">
        <h1 className="logo">Site portfolio</h1>
        <nav className="header_nav" role="navigation" aria-label='메인메뉴'>
          <ul>
            <li><a href="#intro">Intro</a></li>
            <li><a href="#ability">Ability</a></li>
            <li><a href="#stie">Site</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
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