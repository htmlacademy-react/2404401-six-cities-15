import React from 'react';
import ReviewsItem from './reviews-item';
import {TReview} from '../../util/types';

type TReviewList = {
  reviews: TReview[];
}

export default function ReviewList({reviews}: TReviewList): React.JSX.Element {
  return (
    <ul className="reviews__list">
      {
        reviews.map((review) => <ReviewsItem key={review.id} review={review} />)
      }
    </ul>
  );
}
