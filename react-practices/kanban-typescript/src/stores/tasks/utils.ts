export const reorderList = (
  list: Array<any>,
  sourceIndex: number,
  destIndex: number
) => {
  const tasks = [...list];
  const [removed] = tasks.splice(sourceIndex, 1);

  tasks.splice(destIndex, 0, removed);

  return tasks;
};

export const moveTaskList = (
  sourceList: Array<any>,
  destList: Array<any>,
  sourceIndex: number,
  destIndex: number
) => {
  const tasks1 = [...sourceList];
  const tasks2 = [...destList];

  const [removedItem] = tasks1.splice(sourceIndex, 1);

  tasks2.splice(destIndex, 0, removedItem);

  const result = {
    source: tasks1,
    destination: tasks2
  };

  return result;
};
