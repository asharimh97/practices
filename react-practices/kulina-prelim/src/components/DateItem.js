import React from "react"
import { format, isWeekend } from "date-fns";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  background: none;
  border: none;
  border-radius: 50%;
  color: ${props => props.theme.colors.charcoal};
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  height: 40px;
  justify-content: center;
  margin: 0 2px;
  width: 40px;
  transition: all 0.3s ease;

  &:last-child {
    margin: 0px;
  }

  &:hover {
    background: ${props => props.theme.colors.charcoal};
    color: ${props => props.theme.colors.white};
  }

  ${props => props.active && css`
    background: ${props => props.theme.colors.charcoal};
    color: ${props => props.theme.colors.white};
  `}

  ${props => props.weekend && css `
  color: ${props => props.theme.colors.shadedWhite};
  cursor: not-allowed;
    pointer-events: none;
  `};
`;

const DayText = styled.p`
  color: inherit;
  font-size: 8px;
  margin: 0;
  text-transform: uppercase;
`;

const DateText = styled.p`
  color: inherit;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

const DateItem = ({ date, active, onSelectDate }) => {
  return (
    <Wrapper data-test="date-item" active={active} weekend={isWeekend(date)} onClick={() => onSelectDate(date)}>
      <DayText data-test="day-text">{format(date, "iii")}</DayText>
      <DateText data-test="date-text">
        {format(date, "d")}
      </DateText>
    </Wrapper>
  )
};

DateItem.propTypes = {
  date: PropTypes.object,
  active: PropTypes.bool,
  onSelectDate: PropTypes.func,
}

export default DateItem;