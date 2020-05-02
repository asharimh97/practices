import React from "react"
import PropTypes from "prop-types";
import { IoIosTrash, IoIosCheckmarkCircle } from "react-icons/io";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  border: solid 1px #cecece;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const TodoContent = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: flex-start;
`;

const CheckTodo = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 8px;
`;

const ButtonDelete = styled.button`
  background: none;
  border: none;
  color: #ca3f4a;
  cursor: pointer;
`;

const CardTodo = ({ onComplete, onDelete, status, todo }) => {
  return (
    <Wrapper>
      <TodoContent>
        {status === "added" ?
          <CheckTodo onChange={onComplete} />
          : status === "completed" ? 
          <IoIosCheckmarkCircle color="#22c971" style={{ marginRight: "8px" }} />
          : <IoIosTrash color="#ca3f4a" style={{ marginRight: "8px" }} />
        }
        {todo}
      </TodoContent>
      {status === "added" && (
        <ButtonDelete onClick={onDelete}>
          <IoIosTrash />
        </ButtonDelete>
      )}
    </Wrapper>
  )
}

CardTodo.propTypes = {
  status: PropTypes.string,
  todo: PropTypes.string,
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
};

CardTodo.defaultProps = {
  todo: "Lorem ipsum",
  status: "added"
};

export default CardTodo;
