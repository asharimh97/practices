import { Box, Button, Flex, Input, Label } from "components/atoms";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {
  defaultValues?: Record<string, any>;
  onSubmit: any;
};

const FormAddTask: React.FC<Props> = ({ defaultValues = {}, onSubmit }) => {
  const { handleSubmit, register } = useForm({ defaultValues });

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="task" ref={register} />
        </div>
        <div>
          <Label htmlFor="dueDate">Due Date</Label>
          <Input type="date" name="dueDate" ref={register} />
        </div>
        <Flex justifyContent="flex-end" mt={3}>
          <Button size="small" type="submit" color="blue">
            Add task
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default FormAddTask;
