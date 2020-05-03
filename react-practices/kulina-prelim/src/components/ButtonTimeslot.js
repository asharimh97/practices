import React, { useContext } from "react";
import styled, { css } from "styled-components";
import AppContext from "../context/AppContext";

const ButtonGroup = styled.div`
  display: flex;
  margin: 16px 0;
`;

const Button = styled.button`
  background: none;
  border: solid 2px;
  border-color: ${props => props.theme.colors.shadedWhite};
  color: ${ props => props.theme.colors.charcoal };
  display: flex;
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  height: 36px;
  justify-content: center;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.charcoal};
    border-color: ${props => props.theme.colors.charcoal};
    color: ${props => props.theme.colors.white};
  }

  ${props => props.active && css`
    background-color: ${props => props.theme.colors.charcoal};
    border-color: ${props => props.theme.colors.charcoal};
    color: ${props => props.theme.colors.white};
  `};

  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

const ButtonTimeslot =  () => {
  const { state, setState } = useContext(AppContext);

  const handleChangeTimeslot = val => {
    setState(prevState => ({
      ...prevState,
      timeslot: val
    }))
  };

  return (
    <ButtonGroup>
      <Button 
        active={state.timeslot === "lunch"}
        onClick={() => handleChangeTimeslot("lunch")}
      >
        Lunch
      </Button>
      <Button 
        active={state.timeslot === "dinner"} 
        onClick={() => handleChangeTimeslot("dinner")}
      >
        Dinner
      </Button>
    </ButtonGroup>
  )
}

export default ButtonTimeslot;