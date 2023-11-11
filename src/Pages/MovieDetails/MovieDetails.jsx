import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getFilmInformation } from 'Api/Api';
import { imgUrl } from 'services/url';
import poster from '../../img/image-not-found.jpg';
import { Loader } from '../../components/Loader';

import {
  LinkBack,
  Wrapper,
  ImageWrapp,
  Poster,
  MovieName,
  CategoryItem,
  Category,
  Description,
  InfoTitle,
  InfoList,
  InfoItem,
  InfoLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getFilmInformation(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const {
    poster_path,
    title,
    original_title,
    vote_average,
    release_date,
    overview,
    genres,
    runtime,
    spoken_languages,
  } = movie;

  return (
    <>
      <LinkBack to={backLinkHref}>Go Back</LinkBack>
      <Wrapper>
        <ImageWrapp>
          <Poster
            src={poster_path ? imgUrl + poster_path : poster}
            alt={title}
          />
        </ImageWrapp>
        <div>
          <MovieName>{original_title}</MovieName>
          <ul>
            <CategoryItem>
              <Category>
                User Score:{' '}
                <Description rating={vote_average}>
                  {vote_average.toFixed(1)}
                </Description>
              </Category>
            </CategoryItem>
            <CategoryItem>
              <Category>
                Release Date: <Description>{release_date}</Description>
              </Category>
            </CategoryItem>
            <CategoryItem>
              <Category>
                Overview: <Description>{overview}</Description>
              </Category>
            </CategoryItem>
            <CategoryItem>
              <Category>
                Genres:
                {genres.map(({ name }) => (
                  <Description key={name}> {name}</Description>
                ))}
              </Category>
            </CategoryItem>
            <CategoryItem>
              <Category>
                Film duration: <Description>{runtime} min</Description>
              </Category>
            </CategoryItem>
            <CategoryItem>
              <Category>
                Languages:
                {spoken_languages.map(({ name }) => (
                  <Description key={name}> {name}</Description>
                ))}
              </Category>
            </CategoryItem>
          </ul>
          <InfoTitle>Additional information</InfoTitle>
          <InfoList>
            <InfoItem>
              <InfoLink to="cast" state={{ from: backLinkHref }}>
                Cast
              </InfoLink>
            </InfoItem>
            <InfoItem>
              <InfoLink to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </InfoLink>
            </InfoItem>
          </InfoList>
        </div>
      </Wrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
