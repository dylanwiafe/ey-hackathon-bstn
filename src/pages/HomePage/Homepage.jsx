import React from 'react'
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import Endorsements from "../../components/Endorsements/Endorsements"
import AppStore from "../../components/AppStore/AppStore"
import Footer from "../../components/Footer/Footer"

function Homepage() {
    return (
        <div>
            <Header />
            <Hero />
            <Endorsements />
            <AppStore />
            <Footer />
        </div>
    )
}

export default Homepage
