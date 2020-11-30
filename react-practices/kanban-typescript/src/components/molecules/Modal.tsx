import { Card, Flex, Title } from "components/atoms";
import React from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import theme from "styles/theme";
import { convertHexToRGBA } from "utils/helpers";

type Props = {
  width?: string | number;
  visible?: boolean;
  onClose?: any;
  children?: any;
  title?: string;
};

type OverlayProps = {
  visible?: boolean;
  children?: any;
};

const Overlay = styled(Flex).attrs({
  align: "center",
  justify: "center"
})<OverlayProps>`
  background: ${convertHexToRGBA(theme.colors.black[100], 0.7)};
  height: 100%;
  left: 0;
  opacity: 0;
  position: fixed;
  top: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  width: 100%;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  outline: none;
  padding: 12px;
  position: absolute;
  right: 0;
  top: 0;
`;

const Modal: React.FC<Props> = ({
  children,
  width,
  visible,
  onClose,
  title,
  ...props
}) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  const Content = (
    <Overlay visible={visible}>
      <Card position="relative" width={width}>
        <CloseButton onClick={onClose}>x</CloseButton>
        <Title as="h5" mt={0} mb={3}>
          {title}
        </Title>
        {children}
      </Card>
    </Overlay>
  );

  return createPortal(Content, modalRoot);
};

Modal.defaultProps = {
  width: 350,
  onClose: () => {}
};

export default Modal;
