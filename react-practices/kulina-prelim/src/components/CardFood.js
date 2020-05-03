import React from "react";
import numeral from "numeral";
import PropTypes from "prop-types";
import { IoIosStar, IoIosAdd, IoIosStarHalf } from "react-icons/io";
import styled from "styled-components";
import theme from "../utils/theme";

const Wrapper = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const Image = styled.div`
  overflow: hidden;
  height: 300px;
  position: relative;
  width: 100%;

  & img {
    bottom: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 100%;
    left: 0;
    object-fit: cover;
    object-position: center;
    position: absolute;
    right: 0;
    top: 0px;
    width: 100%;
  }
`;

const FoodContent = styled.div`
  background-color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
  padding: 16px;
`;

const FoodRating = styled.div`
  font-weight: 500;
  display: flex;
  margin-bottom: 4px;

  & span {
    font-size: 12px;
    font-weight: 500;
    margin-left: 8px;
    padding-top: 1px;
  }
`;

const FoodName = styled.div`
  color: ${props => props.theme.colors.charcoal};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;

  & span {
    display: block;
    font-size: 11px;
    font-weight: 300;
  }
`;

const FoodPrice = styled.div`
  align-items: center;
  display: flex;
  font-weight: 500;
  justify-content: space-between;
`;

const ButtonAdd = styled.button`
  align-items: center;
  background: ${props => props.theme.colors.red};
  border: none;
  border-radius: 3px;
  color: #fff;
  display: flex;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  height: 30px;
  justify-content: center;
  text-transform: uppercase;
  width: 84px;
`;

const generateStar = rating => {
  const flooredRating = Math.floor(rating);
  const arr = new Array(flooredRating).fill(0).map((_, idx) => (
    <IoIosStar key={idx} size="14px" color={theme.colors.red} />
  ));

  if (rating - flooredRating > 0) {
    if (rating - flooredRating < 0.5) {
      arr.push(<IoIosStarHalf size="14px" color={theme.colors.red} />);
    } else {
      arr.push(<IoIosStar size="14px" color={theme.colors.red} />);
    }
  }

  return arr;
}

const CardFood = ({ foodData, onAddFood }) => {
  return (
    <Wrapper data-test="card-food">
      <Image data-test="food-image">
        <img src={foodData.image} alt={foodData.name} />
      </Image>
      <FoodContent data-test="food-content">
        <FoodRating>
          {foodData.rating}
          <span>
            {generateStar(foodData.rating)}
          </span>
        </FoodRating>
        <FoodName>
          {foodData.name}
          <span>
            by {foodData.merchant} ・ {foodData.package_catalogue}
          </span>
        </FoodName>
        <FoodPrice>
          Rp {numeral(foodData.price).format("0,0")}
          <ButtonAdd onClick={() => onAddFood(foodData)}>
            Add <IoIosAdd size="14px" />
          </ButtonAdd>
        </FoodPrice>
      </FoodContent>
    </Wrapper>
  )
}

CardFood.propTypes = {
  foodData: PropTypes.object,
  onAddFood: PropTypes.func,
};

export default CardFood;