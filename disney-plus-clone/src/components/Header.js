import React from 'react'
import styled from 'styled-components';


const Header = () => {
  return (
    <Nav>
        <Logo src = 'Disney Plus/images/logo.svg'/>
        <NavMenu>
            <a>
                <img src='Disney Plus/images/home-icon.svg'/>
                <span>
                  HOME
                </span>
            </a>
            <a>
                <img src='Disney Plus/images/search-icon.svg'/>
                <span>
                  SEARCH
                </span>
            </a>

            <a>
                <img src='Disney Plus/images/watchlist-icon.svg'/>
                <span>
                  WATCHLIST
                </span>
            </a>

            <a>
                <img src='Disney Plus/images/original-icon.svg'/>
                <span>
                  ORIGINALS
                </span>
            </a>
            <a>
                <img src='Disney Plus/images/movie-icon.svg'/>
                <span>
                  MOVIES
                </span>
            </a>
            <a>
                <img src='Disney Plus/images/series-icon.svg'/>
                <span>
                  SERIES
                </span>
            </a>
        </NavMenu>
        <UserImg src = 'Disney Plus/images/favicon.svg'/>

      
    </Nav>
  )
}

export default Header;



// you need to install styled-componenets to put your css style here
// npm install styled-components

const Nav = styled.div`
    height : 70px;
    background: black;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width : 80px;
  

`
const NavMenu = styled.div`
display: flex;
margin-left: 20px;
flex:1;
    a{
      align-items: center;
      padding: 0 12px;
      display: flex;
      img {
        width:20px;
        height: 20px;
        
      }
      span{
        font-sizes: 13px;
        letter-spacing: 1.62px;
      }
    }
`
const UserImg = styled.img`
width : 48px;
    height: 48px;
    border-radius: 50%;
    background-color: red;

`