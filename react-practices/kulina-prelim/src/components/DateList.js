import React, { useContext } from "react";
import { add, isSameDay } from "date-fns";
import PropTypes from "prop-types";
import styled from "styled-components";
import DateItem from "./DateItem";
import AppContext from "../context/AppContext";

const Wrapper = styled.div`
  background: white;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 8px;
  overflow-x: auto;
  padding: 8px;
  position: sticky;
  top: 53px;
  z-index: 10;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DateList = ({ startDate, activeDate }) => {
  const { state, setState } = useContext(AppContext);
  
  const generateList = () => {
    let list = new Array(14).fill(startDate);
    
    list = list.map((item, idx) => add(item, { days: idx }));
    
    return list;
  }
  
  const handleSelectDate = date => {
    const newContext = {
      ...state,
      activeDate: date
    };
    
    setState(newContext);
  }
  
  const listDate = generateList();
  return (
    <Wrapper>
      {listDate.map((item, idx) => (
        <DateItem 
          key={idx} 
          data-test="date-item"
          date={item}
          active={isSameDay(activeDate, item)}
          onSelectDate={handleSelectDate}
        />
      ))}
    </Wrapper>
  )
};

DateList.propTypes = {
  startDate: PropTypes.object,
  activeDate: PropTypes.object,
}

export default DateList;
