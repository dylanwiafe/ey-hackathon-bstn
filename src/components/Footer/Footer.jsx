import React from 'react'
import "./Footer.scss"
import Linkedin from "../../assets/images/Linkedin.png"
import Facebook from "../../assets/images/Facebook.png"
import Instagram from "../../assets/images/Instagram.png"

function Footer() {
    return (
        <div className="footer">
            <h1 className="footer__terms">Terms & Conditions</h1>
            <div className="footer__social">
                <a href="https://linkedin.com">
                    <img className="footer__linkedin" src={Linkedin} alt="Linkedin"/>
                </a>
                <a href="https://facebook.com">
                    <img className="footer__facebook" src={Facebook} alt="Facebook"/>
                </a>
                <a href="https://instagram.com">
                    <img className="footer__instagram" src={Instagram} alt="Instagram"/>
                </a>
            </div>
        </div>
    )
}

export default Footer
