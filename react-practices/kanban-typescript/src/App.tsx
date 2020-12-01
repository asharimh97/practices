import React, { useState } from "react";
import { Box, Button, Container, Grid } from "components/atoms";
import { DragDropContext } from "react-beautiful-dnd";
import ListTask from "components/organisms/ListTask";
import Modal from "components/molecules/Modal";
import { connect } from "react-redux";
import { listSelector } from "stores/lists/reducer";
import { bindActionCreators } from "redux";
import { addList, moveTask } from "stores/actions";
import FormAddList from "components/organisms/FormAddList";
import { propType as listPropType } from "stores/lists/schema";

type Props = {
  [key: string]: any;
};

function App({ ...props }: Props) {
  const [modal, setModal] = useState(false);

  const handleAddList = (val: Record<string, any>, e: any) => {
    props.addList(val.name);
    setModal(false);
    e.target.reset();
  };

  const handleDragEnd = (e: any) => {
    const { source, destination } = e;

    console.log({ source, destination });
    const data = {
      sourceList: source.droppableId,
      destList: destination.droppableId,
      sourceIndex: source.index,
      destIndex: destination.index
    };

    props.moveTask(data);
  };

  console.log(props.list);

  return (
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid columns="repeat(4, minmax(180px, 250px))" gap={3}>
          {props.list.map(({ id, name }: listPropType) => (
            <ListTask key={id} id={id} title={`List: ${name}`} />
          ))}
        </Grid>
      </DragDropContext>
      <Modal
        title="Add New List"
        visible={modal}
        onClose={() => setModal(false)}
      >
        <FormAddList onSubmit={handleAddList} />
      </Modal>
      <Box position="fixed" top={3} right={3} onClick={() => setModal(true)}>
        <Button colorType="gradient" color="blue" rounded>
          + Add List
        </Button>
      </Box>
    </Container>
  );
}

const mapStateToProps = (state: any) => ({
  list: listSelector(state)
});
const mapDispatchToProps = (dispatch: any) => ({
  addList: bindActionCreators(addList, dispatch),
  moveTask: bindActionCreators(moveTask, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
