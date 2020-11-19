import { Card, Text } from "components/atoms";
import { format } from "date-fns";
import React from "react";

type Props = {
  task?: string;
  dueDate?: string;
  [key: string]: any;
};

const CardItem: React.FC<Props> = ({ task, dueDate = "", ...props }) => {
  return (
    <Card data-testid="card-item" mb={3}>
      <Text data-testid="card-title" bold mt={0} mb={2}>
        {task}
      </Text>
      <Text data-testid="card-date" small color="black.80" tight>
        {format(new Date(dueDate), "d MMMM yyyy")}
      </Text>
    </Card>
  );
};

CardItem.defaultProps = {
  task: "Lorem ipsum",
  dueDate: "2020-01-10"
};

export default CardItem;
