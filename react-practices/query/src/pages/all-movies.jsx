import { x } from "@xstyled/styled-components";
import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";
import ReactVisibilitySensor from "react-visibility-sensor";
import CardMovie from "../components/CardMovie";
import Layout from "../components/Layout";
import useQueryParams from "../hooks/useQueryParams";
import { getAllMovies } from "../stores/actions/movies";

const AllMoviesPage = () => {
  const params = useQueryParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { q } = params;

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage
  } = useInfiniteQuery(["getAllFilms", { q }], ({ pageParam = 1 }) => {
    return getAllMovies({ keyword: q, page: pageParam });
  });

  const handleLoadMore = isVisible => {
    if (isVisible && !isFetching) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchNextPage({ pageParam: nextPage });
    }
  };

  const pagedMovieDatas = data?.pages || [];

  return (
    <Layout>
      <x.div
        position="relative"
        w="100%"
        h="250px"
        overflow="hidden"
        borderRadius="lg"
        mb={8}
      >
        <x.img
          src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
          position="absolute"
          left="0"
          top="0"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </x.div>
      <x.p color="cool-gray-500" mb={8}>
        You searched for: <strong>"{q}"</strong>
      </x.p>
      <x.div
        display="grid"
        gridTemplateColumns={{
          _: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          xl: "repeat(5, 1fr)"
        }}
        gap={6}
        mb={8}
      >
        {pagedMovieDatas.map(page =>
          page.Search.map(movie => (
            <CardMovie
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              id={movie.imdbID}
            />
          ))
        )}
      </x.div>
      <ReactVisibilitySensor onChange={handleLoadMore}>
        <x.p textAlign="center" color="cool-gray-400">
          Load more movies...
        </x.p>
      </ReactVisibilitySensor>
    </Layout>
  );
};

export default AllMoviesPage;
