import React from 'react'
import "./Header.scss"
import Profile from "../../assets/images/Profile.png"

function Header() {
    return (
        <header className="header">
            <div className="header__menu">
            <img className="header__profile" src={Profile} alt="Your Profile" />
            <ul className="header__ul">
                <li className="header__li">About</li>
                <li className="header__li">About</li>
                <li className="header__li">About</li>
            </ul>
            </div>
            <div className="header__btns">
                <div className="header__btn-wrapper">
                    <button className="header__btn">Receive Care</button>
                </div>
                <div>
                    <button className="header__btn">Volunteer</button>
                </div>
            </div>
        </header>
    )
}

export default Header
