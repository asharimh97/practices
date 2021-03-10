import React from "react";
import { useLocation, useParams } from "react-router-dom";

const AllMoviesPage = () => {
  const params = useParams();
  const location = useLocation();

  console.log({ params, location });

  return (
    <div>
      <p>Ini halaman semua movies</p>
    </div>
  );
};

export default AllMoviesPage;
