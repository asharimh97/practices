import React from "react";
import { Container, Grid } from "components/atoms";
import { DragDropContext } from "react-beautiful-dnd";
import ListTask from "components/organisms/ListTask";

function App() {
  const handleDragEnd = (e: any) => {
    console.log(e);
    console.log("drag ended");
  };

  return (
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid columns="repeat(4, minmax(180px, 250px))" gap={3}>
          <ListTask />
          <ListTask title="Task List 2" id="task-droppable-2" />
          <ListTask title="Task List 4" id="task-droppable-3" />
          <ListTask title="Task List 3" id="task-droppable-4" />
        </Grid>
      </DragDropContext>
    </Container>
  );
}

export default App;
