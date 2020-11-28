import { propType as taskPropType } from "../tasks/schema";

export interface propType {
  id: string | number;
  name: string;
  tasks: Array<taskPropType>;
}

export const schema = {
  id: "",
  name: "",
  tasks: []
};
