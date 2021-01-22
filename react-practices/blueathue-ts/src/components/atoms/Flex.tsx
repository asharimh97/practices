import { AnyComponentProp } from "../../../@types/general";
import Base from "./Base";

const Flex: React.FC<AnyComponentProp> = ({ children, ...props }) => {
  return (
    <Base {...props} display="flex">
      {children}
    </Base>
  );
};

export default Flex;
