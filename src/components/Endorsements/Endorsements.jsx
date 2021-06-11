import React from 'react'
import Forbes from "../../assets/images/Forbes.png"
import BusinessInsider from "../../assets/images/BusinessInsider.png"
import NYT from "../../assets/images/NYT.png"
import CDC from "../../assets/images/CDC.png"
import Oprah from "../../assets/images/Oprah.png"
import "./Endorsements.scss"

function Endorsements() {
    return (
        <div className="endorsements">
            <h1 className="endorsements__title">As Seen On</h1>
            <div className="endorsements__logos">
                <img className="endorsements__logos-forbes" src={Forbes}/>
                <img className="endorsements__logos-BI" src={BusinessInsider}/>
                <img className="endorsements__logos-NYT" src={NYT}/>
                <img className="endorsements__logos-CDC" src={CDC}/>
                <img className="endorsements__logos-oprah" src={Oprah}/>
            </div>
        </div>
    )
}

export default Endorsements
