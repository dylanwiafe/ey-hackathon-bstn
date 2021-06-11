import React from "react";
import "./AppStore.scss";
import Download from "../../assets/images/Download.png";
import iPhone from "../../assets/images/App.gif";

function AppStore() {
    return (
        <div className="appstore">
            <div className="appstore__container">
                <div className="appstore__background">
                    <div className="appstore__content">
                        <div>
                            <p className="appstore__title">Download the App</p>
                            <a href="https://www.apple.com/ca/app-store/">
                                <img className="appstore__download" src={Download} alt="Download Now!"/>
                            </a>
                        </div>
                        <img className="appstore__iphone" src={iPhone} alt="App Demo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppStore;
