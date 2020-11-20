import { Box, Title } from "components/atoms";
import CardItem from "components/molecules/CardItem";
import React from "react";
import { Droppable } from "react-beautiful-dnd";

type Props = {
  title?: string;
  tasks?: Array<any>;
  [key: string]: any;
};

const ListTask: React.FC<Props> = ({
  children,
  tasks,
  id,
  title,
  ...props
}) => {
  return (
    <Box {...props}>
      <Title as="h5">{title}</Title>
      <Droppable droppableId={id}>
        {provided => (
          <Box
            bg="rgba(0,0,0,0.3)"
            borderRadius="8px"
            p={3}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks?.map((item, idx) => {
              return (
                <CardItem
                  task={item}
                  id={`${id}-task-${idx}`}
                  key={idx}
                  index={idx}
                />
              );
            })}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
};

ListTask.defaultProps = {
  tasks: [...new Array(5)],
  id: "droppable-task",
  title: "Title Tasks"
};

export default ListTask;
