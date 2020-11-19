import { Box, Title } from "components/atoms";
import CardItem from "components/molecules/CardItem";
import React from "react";

type Props = {};

const ListTask: React.FC<Props> = props => {
  return (
    <Box>
      <Title as="h5">Task Title</Title>
      {[...new Array(10)].map((item, idx) => (
        <CardItem key={idx} />
      ))}
    </Box>
  );
};

export default ListTask;
