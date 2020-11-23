import React, { useState } from 'react';
import Rating from 'react-rating';
import { Container } from 'reactstrap';
import { BookDetail } from '../../../models/BookDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DescriptionNReviews.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export interface Props {
  book: BookDetail;
  reload: () => void;
}

const SCREENS = {
  DESCRIPTION: 'DESCRIPTION',
  REVIEWS: 'REVIEWS',
};

export function DescriptionNReviews(props: Props) {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.DESCRIPTION);

  const [rating, setRating] = useState(0);

  //initial form values
  const initialFormValues = {
    review: '',
    rating: 0,
    name: '',
    email: '',
  };

  //validation schema

  const validationSchema = Yup.object().shape({
    review: Yup.string(),
    rating: Yup.number(),
    name: Yup.string(),
    email: Yup.string()
  });

  const handleSubmit = (values: any) => {
    console.log(values)
    props.reload();
  };

  return (
    <Container>
      <div className="description-n-reviews">
        <div className="description-n-reviews__switch-btn-group">
          <button
            className={`playfair ${
              currentScreen === SCREENS.DESCRIPTION
                ? 'description-n-reviews__switch-btn-group__active-btn'
                : 'description-n-reviews__switch-btn-group__not-active-btn'
            }`}
            onClick={() => setCurrentScreen(SCREENS.DESCRIPTION)}
          >
            Description
          </button>
          <button
            className={`playfair ${
              currentScreen === SCREENS.REVIEWS
                ? 'description-n-reviews__switch-btn-group__active-btn'
                : 'description-n-reviews__switch-btn-group__not-active-btn'
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
            <Formik
              initialValues={initialFormValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => {
                return (
                  <Form>
                    <p>Your rating *</p>
                    <Field name="rating" type="number">
                      {() => (
                        <Rating
                          initialRating={rating}
                          className="description-n-reviews__reviews__rating"
                          emptySymbol={<FontAwesomeIcon icon={farStar} />}
                          fullSymbol={<FontAwesomeIcon icon={faStar} />}
                        />
                      )}
                    </Field>
                    <p>Your review *</p>
                    <Field
                      as="textarea"
                      className="description-n-reviews__reviews__input-review"
                      cols={45}
                      rows={8}
                      name="review"
                    />
                    <div>
                      <label>
                        <span>Name*</span>
                        <Field
                          className="description-n-reviews__reviews__input-name"
                          type="text"
                          name="name"
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        <span>Email*</span>
                        <Field
                          className="description-n-reviews__reviews__input-email"
                          type="text"
                          name="email"
                        />
                      </label>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="description-n-reviews__reviews__submit-btn ml-2"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </Form>
                )
              }}
            </Formik>
          </div>
        )}
      </div>
    </Container>
  );
}
