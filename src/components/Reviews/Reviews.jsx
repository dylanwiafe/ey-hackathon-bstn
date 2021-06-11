import React from 'react'
import "./Reviews.scss"
import Border from "../../assets/images/Border.png"
import Star from "../../assets/images/Star.png"
import NoStar from "../../assets/images/NoStars.png"

function Reviews() {
    return (
        <div className="reviews">
            <div>
                <h1 className="endorsements__title">Reviews</h1>
                <img className="endorsements__border" src={Border} alt="hi" />
            </div>
            <div className="reviews__stars">
                <div>
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                </div>
                <div>
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={NoStar} />
                </div>
                <div>
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                </div>
            </div>
            <div className="reviews__reviews">
                <div className="reviews__txt">
                    <p>This app was a godsend! I got a response less than 24 hours and meds soon after messaging with a doctor. It was speedy and I would definitely use again!</p>
                </div>
                <div className="reviews__txt">
                    <p>I had a great experience using this app. The Dr. I spoke with over video chat was very helpful and professional. Start to finish it took less than an hour.</p>
                </div>
                <div className="reviews__txt">
                    <p>Fantastic! I was dreading taking 5 kids to an expensive emergency room and I don't have insurance. Within 2 hours of the office opening I recieved a phone call from the doctor. </p>
                </div>
            </div>
        </div>
    )
}

export default Reviews
