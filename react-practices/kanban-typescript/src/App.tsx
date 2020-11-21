import React, { useState } from "react";
import { Container, Grid } from "components/atoms";
import { DragDropContext } from "react-beautiful-dnd";
import ListTask from "components/organisms/ListTask";
import tasks from "__mocks__/tasks";

function App() {
  const [taskList, setTaskList] = useState(tasks);

  const reorder = (sourceIndex: number, destinationIndex: number) => {
    const tasks = [...taskList];
    const [removed] = tasks.splice(sourceIndex, 1);

    tasks.splice(destinationIndex, 0, removed);

    return tasks;
  };

  const handleDragEnd = (e: any) => {
    const { source, destination } = e;

    const newTaskList = reorder(source.index, destination.index);

    setTaskList(newTaskList);
  };

  return (
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid columns="repeat(4, minmax(180px, 250px))" gap={3}>
          <ListTask />
          <ListTask
            title="Task List 2"
            id="task-droppable-2"
            tasks={taskList}
          />
          <ListTask title="Task List 4" id="task-droppable-3" />
          <ListTask title="Task List 3" id="task-droppable-4" />
        </Grid>
      </DragDropContext>
    </Container>
  );
}

export default App;
