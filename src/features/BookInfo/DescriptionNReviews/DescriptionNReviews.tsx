import React, { useState } from "react";
import Rating from "react-rating";
import { Container } from "reactstrap";
import { BookDetail } from "../../../models/BookDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DescriptionNReviews.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

export interface Props {
  book: BookDetail;
}

const SCREENS = {
  DESCRIPTION: "DESCRIPTION",
  REVIEWS: "REVIEWS",
};

export function DescriptionNReviews(props: Props) {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.DESCRIPTION);

  //form states
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  //Handle form
  const handleReviewChange = (value: string) => {
    setReview(value);
  };

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  return (
    <Container>
      <div className="description-n-reviews">
        <div className="description-n-reviews__switch-btn-group">
          <button
            className={`playfair ${
              currentScreen === SCREENS.DESCRIPTION
                ? "description-n-reviews__switch-btn-group__active-btn"
                : "description-n-reviews__switch-btn-group__not-active-btn"
            }`}
            onClick={() => setCurrentScreen(SCREENS.DESCRIPTION)}
          >
            Description
          </button>
          <button
            className={`playfair ${
              currentScreen === SCREENS.REVIEWS
                ? "description-n-reviews__switch-btn-group__active-btn"
                : "description-n-reviews__switch-btn-group__not-active-btn"
            }`}
            onClick={() => setCurrentScreen(SCREENS.REVIEWS)}
          >
            Reviews
          </button>
        </div>
        {currentScreen === SCREENS.DESCRIPTION ? (
          <div className="description-n-reviews__description pb-2 pt-4 px-4 pt-md-5 px-md-5">
            <h3 className="playfair">Description</h3>
            <p>{props.book.description}</p>
          </div>
        ) : (
          <div className="description-n-reviews__reviews pb-2 pt-4 px-4 pt-md-5 px-md-5">
            <h3 className="playfair">Reviews</h3>
            {!props.book.reviews.length ? (
              <div>
                <p>There are no reviews yet.</p>
                <p>Be the first to review “{props.book.name}”</p>
              </div>
            ) : (
              <p>Add a review</p>
            )}
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <p>Your rating *</p>
            <Rating
              emptySymbol={<FontAwesomeIcon icon={farStar} />}
              fullSymbol={<FontAwesomeIcon icon={faStar} />}
              onChange={handleRatingChange}
            />
            <p>Your review *</p>
            <textarea className="" cols={45} rows={8} />
            <div>
              <label>
                Name* <input type="text" onChange={handleNameChange} />
              </label>
            </div>
            <div>
              <label>
                Email* <input type="text" onChange={handleEmailChange} />
              </label>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
