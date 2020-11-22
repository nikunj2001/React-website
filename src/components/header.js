import React from 'react'

const Header = () => {
    const [state]=React.useState({heading:'About us',link1:"Home",link2:"About"})
    return (
        <div className='header'>
            <div className='header__content'>
                <h1 className='header__content-h1'>About Us</h1>
                <div className='header__content-links'>
                    <a href='' >{state.link1}</a>
                    <span className='header__content-span'></span>
                    <a href='' >{state.link2}</a>

                </div>
            </div>
        </div>
    )
}

export default Header
