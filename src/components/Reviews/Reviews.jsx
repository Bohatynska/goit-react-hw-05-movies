import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'Api/Api';
import { ErrorMessage } from 'components/ErrorMessage/ErorrMessage';
import {
  Wrapper,
  ReviewItem,
  Author,
  DateReview,
  Text,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  async function createReviewList(id) {
    const reviewsList = await getFilmReviews(id);

    if (!reviewsList.length) {
      setError(true);
      return;
    }
    setReviews(reviewsList);
    setError(false);
  }

  useEffect(() => {
    createReviewList(movieId);
  }, [movieId]);

  return (
    <Wrapper>
      {error && <ErrorMessage text={'Sorry, there are no reviews yet'} />}
      {error === false && (
        <ul>
          {reviews.map(({ author, created_at, content }) => (
            <ReviewItem key={author}>
              <Author>{author}</Author>
              <DateReview>{new Date(created_at).toLocaleString()}</DateReview>
              <Text>{content}</Text>
            </ReviewItem>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default Reviews;
