import React, { useContext } from "react";
import numeral from "numeral";
import { IoIosCart, IoIosArrowForward } from "react-icons/io";
import styled, { css } from "styled-components";
import AppContext from "../context/AppContext";

const Wrapper = styled.div`
  background:  linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  bottom: -100%;
  color: #fff;
  left: 0;
  margin: auto;
  padding: 8px;
  position: fixed;
  right: 0px;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 375px;
  z-index: 11;

  ${props => props.active && css`
    bottom: 0;
  `}
`;

const CartContent = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.darkRed};
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  justify-content: space-between;
  padding: 8px;

  & span {
    display: block;
    font-size: 11px;
    font-weight: 400;
    margin-top: 2px;
  }
`;

const Cart = () => {
  const { state } = useContext(AppContext);

  const calculatePrice = () => {
    const price = state.cart.reduce((calculated, current) => calculated  + current.price, 0);

    return price;
  }

  return (
    <Wrapper data-test="cart-component" active={state.cart.length > 0}>
      <CartContent>
        <div>
          {state.cart.length} Items | Rp {numeral(calculatePrice()).format("0,0")}
          <span>
            Termasuk ongkos kirim
          </span>
        </div>
        <div>
          <IoIosCart size="20" style={{ marginRight: "8px" }} />
          <IoIosArrowForward size="16px" />
        </div>
      </CartContent>
    </Wrapper>
  )
}

export default Cart;
