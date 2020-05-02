import React, { forwardRef } from "react";
import { IoIosAdd } from "react-icons/io";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 32px;
  position: relative;

  &:after {
    content: "";
    clear: both;
    display: table;
  }
`

const Input = styled.input`
  border: solid 1px #ccc;
  border-radius: 3px;
  -webkit-box-shadow: -9px 2px 28px -1px rgba(192,192,192,0.55);
  -moz-box-shadow: -9px 2px 28px -1px rgba(192,192,192,0.55);
  box-shadow: -9px 2px 28px -1px rgba(192,192,192,0.55);
  height: 40px;
  padding: 8px;
  width: 100%;
`;

const AfterIcon = styled.div`
  position: absolute;
  right: 7px;
  top: 7px;
`;

const Button = styled.button`
  background-color: #fd4f5d;
  border-radius: 5px;
  color: #fff;
  -webkit-box-shadow: -9px 2px 28px -1px rgba(192,192,192,0.55);
  -moz-box-shadow: -9px 2px 28px -1px rgba(192,192,192,0.55);
  box-shadow: -9px 2px 28px -1px rgba(192,192,192,0.55);
  float: right;
  font-weight: 500;
  margin-top: 8px;
  padding: 8px 16px;
`;

const InputTodo = forwardRef(({ onSubmit, ...props }, ref) => {
  return (
    <Wrapper>
      <Input data-test="input-todo" ref={ref} {...props} />
      <AfterIcon>
        <IoIosAdd color="#cecece" size="24px" />
      </AfterIcon>
      <Button data-test="button-add-todo" onClick={onSubmit}>Add Todo</Button>
    </Wrapper>
  )
});

export default InputTodo;