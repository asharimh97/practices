import { useRouter } from "next/dist/client/router";

interface MovieDetailProps {
  id?: string;
}

function MovieDetailPage() {
  const router = useRouter();
  const { id }: MovieDetailProps = router.query;

  return (
    <div>
      <p>Ada di halaman detail movie, id nya: ${id}</p>
    </div>
  );
}

export default MovieDetailPage;
