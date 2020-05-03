import React from "react";
import PropTypes from "prop-types";
import { FaArrowLeft ,IoIosArrowDown } from "react-icons/all";
import styled from "styled-components";
import theme from "../utils/theme";

const Wrapper = styled.div`
  align-items: center;
  background: white;
  color: ${theme.colors.charcoal};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding: 8px;
  position: sticky;
  top: 0px;
  z-index: 10;
`;

const AddressText = styled.p`
  color: inherit;
  font-size: 10px;
  margin: 0 0 4px;
  text-transform: uppercase;
`;

const CurrentAddress = styled.p`
  color: inherit;
  margin: 0 4px 0 0;
  font-size: 16px;
  font-weight: 700;
`;

const AddressBar = ({ onShowAddressModal, currentAddress, ...props }) => {
  return (
    <Wrapper data-test="address-bar" onClick={onShowAddressModal}>
      <FaArrowLeft size="24px" style={{ marginRight: "16px", marginTop: "8px" }} />
      <div>
        <AddressText>Alamat Pengantaran</AddressText>
        <div style={{ display: "flex" }}>
          <CurrentAddress>
            {currentAddress}
          </CurrentAddress>
          <IoIosArrowDown color={theme.colors.red} style={{ marginTop: "2px" }} />
        </div>
      </div>
    </Wrapper>
  )
};

AddressBar.propTypes = {
  currentAddress: PropTypes.string,
  onShowAddressModal: PropTypes.func,
};

AddressBar.defaultProps = {
  currentAddress: "Kulina"
};

export default AddressBar;