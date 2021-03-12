import { x } from "@xstyled/styled-components";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
import Layout from "../components/Layout";
import RelatedMovie from "../components/RelatedMovies";
import { getDetailMovie } from "../stores/actions/movies";

const DetailMoviePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(
    ["getDetailMovie", { id }],
    () => getDetailMovie({ id })
  );

  const renderContent = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Sorry the movie is not available</div>;
    }

    const { Title, Ratings, Poster, Released, Plot } = data;

    return (
      <x.div>
        <DetailMovie
          title={Title}
          ratings={Ratings}
          poster={Poster}
          released={Released}
          plot={Plot}
        />
        <RelatedMovie title={Title} />
      </x.div>
    );
  };

  return <Layout>{renderContent()}</Layout>;
};

export default DetailMoviePage;
