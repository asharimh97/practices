import React, { useEffect, useState } from "react";
import { Container, Grid } from "components/atoms";
import { DragDropContext } from "react-beautiful-dnd";
import ListTask from "components/organisms/ListTask";
import tasks from "__mocks__/tasks";

function App() {
  const taskListIds = [
    "task-droppable",
    "task-droppable-2",
    "task-droppable-3"
  ];

  const mapTaskList = taskListIds.reduce(
    (mapTasks: Record<string, any>, current) => {
      mapTasks[current] = tasks;

      return mapTasks;
    },
    {}
  );

  const [taskList, setTaskList] = useState<Record<string, any>>({});

  useEffect(() => {
    setTaskList(mapTaskList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Only applies to same list
  const reorder = (
    list: Array<any>,
    sourceIndex: number,
    destinationIndex: number
  ) => {
    const tasks = [...list];
    const [removed] = tasks.splice(sourceIndex, 1);

    tasks.splice(destinationIndex, 0, removed);

    return tasks;
  };

  const move = (
    sourceList: Array<any>,
    destinationList: Array<any>,
    sourceIndex: number,
    destinationIndex: number
  ) => {
    const tasks1 = [...sourceList];
    const tasks2 = [...destinationList];

    const [removedItem] = tasks1.splice(sourceIndex, 1);

    tasks2.splice(destinationIndex, 0, removedItem);

    const result = {
      source: tasks1,
      destination: tasks2
    };

    return result;
  };

  const getList = (id: string) => taskList[id];

  const handleDragEnd = (e: any) => {
    const { source, destination } = e;

    if (source.droppableId === destination.droppableId) {
      const newTaskList = reorder(
        taskList[source.droppableId],
        source.index,
        destination.index
      );

      setTaskList({
        ...taskList,
        [source.droppableId]: newTaskList
      });
    } else {
      const res = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source.index,
        destination.index
      );

      setTaskList({
        ...taskList,
        [source.droppableId]: res.source,
        [destination.droppableId]: res.destination
      });
    }
  };

  return (
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid columns="repeat(4, minmax(180px, 250px))" gap={3}>
          {taskListIds.map((listId, idx) => (
            <ListTask
              key={idx}
              id={listId}
              title={`Task List #${idx}`}
              tasks={taskList[listId]}
            />
          ))}
        </Grid>
      </DragDropContext>
    </Container>
  );
}

export default App;
