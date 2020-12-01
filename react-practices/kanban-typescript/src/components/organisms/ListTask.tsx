import { Box, Button, Title } from "components/atoms";
import CardItem from "components/molecules/CardItem";
import Modal from "components/molecules/Modal";
import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { taskSelector } from "stores/tasks/reducer";
import FormAddTask from "./FormAddTask";
import { propType as taskPropType } from "stores/tasks/schema";
import { bindActionCreators } from "redux";
import { addTask } from "stores/actions";

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
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleAddTask = (data: any, e: any) => {
    const listId = id;
    props.addTask(listId, data);
    e.target.reset();
    setShowModal(false);
  };

  return (
    <Box {...props}>
      <Title as="h5">{title}</Title>
      <Box bg="rgba(0,0,0,0.5)" borderRadius="8px" p={3}>
        <Droppable droppableId={id}>
          {provided => (
            <Box ref={provided.innerRef} {...provided.droppableProps}>
              {tasks?.map((item: taskPropType, idx: number) => {
                return (
                  <CardItem
                    task={item?.task}
                    dueDate={item?.dueDate}
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

        <Button
          color="green"
          block
          style={{ justifyContent: "center" }}
          onClick={() => setShowModal(true)}
        >
          Add task +
        </Button>

        <Modal
          title="Add New Task"
          visible={showModal}
          onClose={() => setShowModal(false)}
        >
          <FormAddTask onSubmit={handleAddTask} />
        </Modal>
      </Box>
    </Box>
  );
};

ListTask.defaultProps = {
  id: "droppable-task",
  title: "Title Tasks"
};

const mapStateToProps = (state: any, props: any) => ({
  tasks: taskSelector(state, props)
});

const mapDispatchToProps = (dispatch: any) => ({
  addTask: bindActionCreators(addTask, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);
