import React from "react";
import { useForm } from "react-hook-form";

type Props = {
  defaultValues?: Record<string, any>;
  onSubmit: any;
};

const FormAddTask: React.FC<Props> = ({ defaultValues = {}, onSubmit }) => {
  const { handleSubmit, register } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="task" ref={register} />
      <input type="date" name="dueDate" ref={register} />
      <button type="submit">Add task</button>
    </form>
  );
};

export default FormAddTask;
