import React from 'react'
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import Vision from "../../components/Vision/Vision"
import Values from "../../components/Values/Values"
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo'
import Endorsements from "../../components/Endorsements/Endorsements"
import AppStore from "../../components/AppStore/AppStore"
import Footer from "../../components/Footer/Footer"


function Homepage() {
    return (
        <div>
            <Header />
            <Hero />
            <Vision />
            <Values />
            <WhatWeDo />
            <Endorsements />
            <AppStore />
            <Footer />
        </div>
    )
}

export default Homepage
