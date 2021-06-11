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
                    <p>I had a great experience using this app. The Dr. I spoke with over video chat was very helpful and professional. Had zero issues connecting via Wi-Fi. Start to finish it took less than an hour, probably closer to 1/2 an hour. Like clockwork when spring hits I end up with a Sinus Infection.</p>
                </div>
                <div className="reviews__txt">
                    <p>This app was a godsend! I was suffering with a bad UTI and no insurance. I got a response less than 24 hours and meds soon after messaging with a doctor. It was speedy and I would definitely use again!</p>
                </div>
                <div className="reviews__txt">
                    <p>Fantastic! I have been having UTI symptoms and absolutely dreading taking 5 kids to an expensive emergency room or urgent care. I don't have insurance currently to make it that much more difficult. I filled out all the information on the app and within 2 hours of the office opening recieved a phone call from the doctor. </p>
                </div>
            </div>
        </div>
    )
}

export default Reviews
