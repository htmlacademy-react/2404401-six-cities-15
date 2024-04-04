import React from 'react';
import ReviewList from './review-list';
import ReviewForm from './review-form';
import {AuthorizationStatus} from '../../util/const';

export default function Reviews({authStatus}: {authStatus: AuthorizationStatus}): React.JSX.Element {
  return (
    <>
      <ReviewList />
      {authStatus && <ReviewForm />}
      {!authStatus && <p>Только авторизованные пользователи могут оставлять комментарии</p>}
    </>
  );
}
