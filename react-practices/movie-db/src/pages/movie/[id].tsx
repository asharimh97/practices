import { wrapper } from "lib/store";
import { useRouter } from "next/dist/client/router";

interface MovieDetailProps {
  id?: string;
}

function MovieDetailPage() {
  const router = useRouter();
  const { id }: MovieDetailProps = router.query;

  return (
    <div>
      <p>Ada di halaman detail movie, id nya: {id}</p>
    </div>
  );
}

export const getInitialProps = wrapper.getInitialPageProps((store) => ({ query }) => {
  const { id }: MovieDetailProps = query;

  console.log(`You are accessing movie with ID: ${id}`);
});

export default MovieDetailPage;
