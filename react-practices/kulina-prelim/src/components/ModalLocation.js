import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { IoIosClose, IoIosLocate } from "react-icons/io";
import styled, { css } from "styled-components";

import location from "../utils/location.json";

const Overlay = styled.div`
  align-items: flex-end;
  background: rgba(0,0,0,0.3);
  display: flex;
  left: 0px;
  height: 100%;
  margin: auto;
  opacity: 0;
  overflow: hidden;
  position: fixed;
  right: 0px;
  top: 0px;
  transition: visibility 0.2s, opacity 0.4s ease;
  visibility: hidden;
  width: 100%;
  max-width: 375px;
  z-index: 12;

  ${props => props.visible && css`
    opacity: 1;
    visibility: visible;
  `}
`;

const Wrapper = styled.div`
  background: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  bottom: -80%;
  height: 80%;
  padding: 8px;
  position: relative;
  width: 100%;

  ${props => props.visible && css`
    bottom: 0;
  `}
`;

const ButtonClose = styled.button`
  background: none;
  border: none;
  float: right;
`;

const InputLocation = styled.input`
  background-color: #fff;
  border: solid 1px ${props => props.theme.colors.shadedWhite};
  border-radius: 3px;
  margin: 8px 8px 16px;
  padding: 8px;
  width: calc(100% - 16px);
`;

const AddressItem = styled.div`
  align-items: center;
  background: #fff;
  border-bottom: solid 1px ${props => props.theme.colors.shadedWhite};
  cursor: pointer;
  display: flex;
  padding: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.shadedWhite};
  }

  &:last-child {
    border-bottom: none;
  }

  & i {
    align-items: center;
    background: ${ props => props.theme.colors.shadedWhite };
    border-radius: 50%;
    color: ${props => props.theme.colors.metalGray};
    display: flex;
    justify-content: center;
    margin-right: 8px;
    height: 25px;
    width: 25px;
  }

  & div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & p {
    color: ${props => props.theme.colors.charcoal};
    font-size: 14px;
    font-weight: 500;
    margin: 0;
  }

  & span {
    color: ${props => props.theme.colors.metalGray};
    font-size: 10px;
    font-weight: 400;
  }
`;

const ModalLocation = ({ visible, onCloseModal, onSelectAddress }) => {
  const [showAddress, setShowAddress] = useState(false);
  const inputRef = useRef(null);

  const handleSearchLocation = () => {
    if (inputRef.current.value.length >=3) {
      setShowAddress(true);
    }
  }

  const handleSetLocation = location => {
    inputRef.current.value = "";
    setShowAddress(false);
    onSelectAddress(location)
  }

  return (
    <Overlay visible={visible}>
      <Wrapper data-test="modal-location" visible={visible}>
        <ButtonClose data-test="button-close" onClick={onCloseModal}>
          <IoIosClose size="24px" />
        </ButtonClose>
        <p style={{ fontWeight: 500, fontSize: "16px" }}>
          Cari makanan yang tersedia di lokasi kamu!
        </p>
        <InputLocation 
          data-test="input-location"
          ref={inputRef}
          placeholder="Masukkan alamat"
          onChange={handleSearchLocation}
        />
        {showAddress && location.map(loc => (
          <AddressItem 
            data-test="address-item"
            key={loc.id}
            onClick={() => handleSetLocation(loc.name)}
          >
            <i>
              <IoIosLocate />
            </i>
            <div>
              <p>{loc.name}</p>
              <span>{loc.address}</span>
            </div>
          </AddressItem>
        ))}
      </Wrapper>
    </Overlay>
  )
};

ModalLocation.propTypes = {
  visible: PropTypes.bool,
  onCloseModal: PropTypes.func,
}

export default ModalLocation;