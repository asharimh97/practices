import React, { useContext } from "react";
import { format } from "date-fns";
import styled from "styled-components";

import foodList from "../utils/food.json";
import CardFood from "./CardFood";
import AppContext from "../context/AppContext";

const Wrapper = styled.div`
  padding: 8px 16px;
`;

const CurrentDay = styled.p`
  color: ${props => props.theme.colors.charcoal};
  font-size: 16px;
  font-weight: 500;
`;

const ListFood = ({ ...props }) => {

  const { state, setState } = useContext(AppContext);

  const handleAddToCart = food => {
    const cart = [].concat(state.cart, food);

    setState(prevState => ({
      ...prevState,
      cart
    }));
  }

  return (
    <Wrapper>
      <CurrentDay>
        {format(state.activeDate, "iiii, d MMMM yyyy")}
      </CurrentDay>
      {foodList.map((food, idx) => (
        <CardFood 
          key={idx}
          data-test="food-item"
          foodData={food}
          onAddFood={handleAddToCart}
        />
      ))}
    </Wrapper>
  )
}

ListFood.propTypes = {};

export default ListFood;