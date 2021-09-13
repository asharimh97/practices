import { wrapper } from "lib/store";
import { effects as movieEffects, selector as movieSelector } from "lib/entities/movie";
import { useSelector } from "react-redux";
import SEO from "global/SEO";

interface MovieDetailProps {
  id: string;
}

function MovieDetailPage({ id }: MovieDetailProps) {
  const { detail: movieDetail } = useSelector(movieSelector);

  if (!movieDetail[id]) {
    return (
      <div>
        oops, movie not found!
      </div>
    );
  }

  const currentMovie = movieDetail[id];

  return (
    <div>
      <SEO title={`${currentMovie.Title} - Movie Showcase`} />
      <p>Ada di halaman detail movie, id nya: {id}</p>
    </div>
  );
}

// @ts-ignore
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ query }) => {
  const { id }: { id?: string; } = query;

  if (!id) {
    return {
      notFound: true,
    };
  }

  // @ts-ignore
  const getMovie = await store.dispatch(movieEffects.getDetailMovie(id));
  const { error } = getMovie.payload;

  if (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id,
    },
  };
});

export default MovieDetailPage;
