import React from 'react'
import styled from 'styled-components';


const Header = () => {
  return (
    <Nav>
        <Logo src = ''/>
        <NavMenu>

        </NavMenu>
    </Nav>
  )
}

export default Header;



// you need to install styled-componenets to put your css style here
// npm install styled-components

const Nav = styled.div`
    height : 70px;
    background: black;
`

const Logo = styled.img`
    width : 80px;

`
const NavMenu = styled.div`
`