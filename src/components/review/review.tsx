import React from 'react';
import ReviewList from './review-list';
import ReviewForm from './review-form';
import {AuthorizationStatus} from '../../util/const';
import {TReview} from '../../util/types';

type TReviews = {
  authStatus: AuthorizationStatus;
  reviews: TReview[];
}

export default function Reviews({authStatus, reviews}: TReviews): React.JSX.Element {
  return (
    <>
      <ReviewList reviews={reviews} />
      {authStatus && <ReviewForm />}
      {!authStatus && <p>Только авторизованные пользователи могут оставлять комментарии</p>}
    </>
  );
}
