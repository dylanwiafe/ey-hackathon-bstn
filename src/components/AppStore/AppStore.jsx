import React from "react";
import "./AppStore.scss";
import Download from "../../assets/images/Download.png";
import iPhone from "../../assets/images/Iphone.png";

function AppStore() {
    return (
        <div className="appstore">
            <div className="appstore__container">
                <div className="appstore__background">
                    <div className="appstore__content">
                        <div>
                            <p className="appstore__title">App Store</p>
                            <p className="appstore__subtitle">Do your part for society. THANKS.</p>
                            <img className="appstore__download" src={Download} />
                        </div>
                        <img className="appstore__iphone" src={iPhone} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppStore;
