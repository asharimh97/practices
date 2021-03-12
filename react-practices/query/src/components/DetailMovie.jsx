import { x } from "@xstyled/styled-components";
import React from "react";

const DetailMovie = ({ title, plot, released, ratings, poster }) => {
  return (
    <x.div display="flex" mb={8}>
      <x.div
        position="relative"
        w="100%"
        maxWidth={300}
        h={425}
        overflow="hidden"
        borderRadius="lg"
        border="solid 1px"
        borderColor="cool-gray-500"
        mr={6}
      >
        <x.img
          src={poster}
          alt={title}
          position="absolute"
          w="100%"
          h="100%"
          top={0}
          left={0}
          objectFit="cover"
        />
      </x.div>
      <div>
        <x.div mb={6}>
          <x.h1 fontWeight={800} fontSize="x-large" mb={3}>
            {title}
          </x.h1>
          <x.p color="cool-gray-400" fontSize="smaller">
            Release date: {released}
          </x.p>
        </x.div>
        <x.p color="blue-gray-600" lineHeight="175%" mb={6}>
          {plot}
        </x.p>
        <x.p mb={4}>Ratings: </x.p>
        <x.div display="grid" gridTemplateColumns="repeat(3, 1fr)" w="50%">
          {ratings.map((rating, idx) => (
            <x.div display="flex" flexDirection="column" alignItems="center">
              <x.h2 fontSize="large" fontWeight={700} mb={4}>
                {rating.Value}
              </x.h2>
              <x.p color="blue-gray-400" textAlign="center" fontSize="smaller">
                {rating.Source}
              </x.p>
            </x.div>
          ))}
        </x.div>
      </div>
    </x.div>
  );
};

export default DetailMovie;
