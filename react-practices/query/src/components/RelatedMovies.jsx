import { x } from "@xstyled/styled-components";
import React from "react";
import { useQuery } from "react-query";
import { getAllMovies } from "../stores/actions/movies";
import CardMovie from "./CardMovie";

const RelatedMovie = ({ title }) => {
  const parsedTitle = title.split(" ");
  const searchTitle =
    parsedTitle[0].toLowerCase === "the" ? parsedTitle[1] : parsedTitle[0];
  const { data, isLoading, isError } = useQuery(
    ["getRelatedMovie", { title: searchTitle }],
    () => getAllMovies({ keyword: searchTitle })
  );

  const renderContent = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Error load related movies</div>;
    }

    const movies = data?.Search || [];

    return (
      <x.div display="grid" gridTemplateColumns="repeat(5, 1fr)" gap={6}>
        {movies.map((movie, idx) => {
          if (idx < 5) {
            return (
              <CardMovie
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                id={movie.imdbID}
              />
            );
          }

          return null;
        })}
      </x.div>
    );
  };

  return (
    <x.div>
      <x.p fontSize="medium" fontWeight={700} color="cool-gray-600" mb={6}>
        Related movies:{" "}
      </x.p>
      {renderContent()}
    </x.div>
  );
};

export default RelatedMovie;
