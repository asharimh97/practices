import { wrapper } from "lib/store";
import { useRouter } from "next/dist/client/router";
import { effects as movieEffects, selector as movieSelector } from "lib/entities/movie";
import { useSelector } from "react-redux";

interface MovieDetailProps {
  id?: string;
}

function MovieDetailPage() {
  const { detail: movieDetail } = useSelector(movieSelector);
  const router = useRouter();
  const { id }: MovieDetailProps = router.query;

  console.log(movieDetail?.[id]);

  return (
    <div>
      <p>Ada di halaman detail movie, id nya: {id}</p>
    </div>
  );
}

// @ts-ignore
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ query }) => {
  const { id }: MovieDetailProps = query;

  // @ts-ignore
  await store.dispatch(movieEffects.getDetailMovie(id));
});

export default MovieDetailPage;
