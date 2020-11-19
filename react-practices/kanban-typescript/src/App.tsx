import React from "react";
import { Container, Grid } from "components/atoms";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import CardItem from "components/molecules/CardItem";

function App() {
  const handleDragEnd = e => {
    console.log(e);
    console.log("drag ended");
  };

  return (
    <Container>
      <Grid columns="repeat(4, minmax(180px, 250px))">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="droppable">
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {[...new Array(5)].map((item, idx) => (
                  <CardItem id={`draggable-${idx}`} key={idx} index={idx} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Grid>
    </Container>
  );
}

export default App;
