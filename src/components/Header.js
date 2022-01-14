import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src='/images/logo.svg' alt='LOGO'/>
            <NavMenu>
                <a>
                    <img src='/images/home-icon.svg' alt='HOME'/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src='/images/search-icon.svg' alt='SEARCH' />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg' alt='HOME'/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg' alt='WATCHLIST'/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg' alt='MOVIES'/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg' alt='SERIES'/>
                    <span>SERIES</span>
                </a>
           
           </NavMenu>
           <UserImg src='https://yt3.ggpht.com/yti/APfAmoEwZAam1jLLXEBvQjkUCTjFgARlaUerflyI8Q=s88-c-k-c0x00ffffff-no-rj-mo'/> 
        </Nav>
        
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img{
            height: 20px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            color: white;
            position relative;

            &:after{
                content: '';
                height: 2px;
                //background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    
`