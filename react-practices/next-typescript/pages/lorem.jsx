import Sample from "components/Sample";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { effects } from "stores/films/slice";

function Lorem() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(effects.getFilms());
  }, [dispatch]);

  return (
    <div>
      <p>Halaman lorem ipsum</p>
      <Sample />
    </div>
  );
}

export default Lorem;
