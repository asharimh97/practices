import { x } from "@xstyled/styled-components";
import React from "react";
import { Link } from "react-router-dom";

const CardMovie = ({ title, poster, id }) => {
  return (
    <Link to={`/movie/${id}`}>
      <x.div>
        <x.div
          position="relative"
          h="350px"
          w="100%"
          overflow="hidden"
          mb={3}
          borderRadius="lg"
          border="solid 1px"
          borderColor="cool-gray-500"
        >
          <x.img
            src={poster}
            alt={title}
            w="100%"
            h="100%"
            position="absolute"
            objectFit="cover"
          />
        </x.div>
        <x.p as="h3" color="blue-gray-500">
          {title}
        </x.p>
      </x.div>
    </Link>
  );
};

export default CardMovie;
