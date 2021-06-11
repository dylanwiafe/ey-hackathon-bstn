import React from 'react'
import "./Header.scss"
import Profile from "../../assets/images/Profile.png"
import Globe from "../../assets/images/Globe.png"

function Header() {
    return (
        <header className="header">
            <div className="header__menu">
                <img className="header__profile" src={Profile} alt="Your Profile" />
                {/* <h1 className="header__logo">UNITY</h1> */}
                <ul className="header__ul">
                    <li className="header__li">About</li>
                    <li className="header__li">Patients</li>
                    <li className="header__li">Providers</li>
                    <li className="header__li">Donate</li>
                </ul>
            </div>
            <div className ="header__login-wrapper">
                <img className="header__btn-globe" src={Globe} alt="Worldwide" />
                <div className="header__btns">
                    <div className="header__btn-wrapper">
                        <button className="header__btn">Login</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
