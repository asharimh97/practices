import { Button, Flex, Input, Label } from "components/atoms";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {
  defaultValues?: Record<string, any>;
  onSubmit: any;
};

const FormAddList: React.FC<Props> = ({
  onSubmit,
  defaultValues,
  ...props
}) => {
  const { handleSubmit, register } = useForm({ defaultValues });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="name">List name</Label>
        <Input id="name" name="name" ref={register} />
      </div>
      <Flex justifyContent="flex-end">
        <Button type="submit" size="small" color="blue">
          Add List
        </Button>
      </Flex>
    </form>
  );
};

export default FormAddList;
