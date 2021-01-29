import { x } from "@xstyled/styled-components";
import { Box, Text } from "../atoms";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  placeholder,
  label,
  type,
  ...props
}) => {
  return (
    <Box mb="16px" lastMarginBottom="0px">
      {label && (
        <Text
          as="label"
          htmlFor={id}
          size="smaller"
          color="warm-gray-400"
          display="block"
          mb="8px"
        >
          {label}
        </Text>
      )}
      <x.input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        {...props}
        fontSize="14px"
        borderColor="warm-gray-400"
        borderRadius
        borderWidth
        p="6px 10px"
        w="100%"
      />
    </Box>
  );
};

Input.defaultProps = {
  type: "text"
};

export default Input;
