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
                <img className="footer__linkedin" src={Linkedin}/>
                <img className="footer__facebook" src={Facebook}/>
                <img className="footer__instagram" src={Instagram}/>
            </div>
        </div>
    )
}

export default Footer
