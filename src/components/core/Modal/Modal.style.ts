import styled from "styled-components";

const Wrapper = styled.div<{$isActive: boolean}>`
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  > div {
    transition: 0.4s;
    transform: translateY(${({ $isActive }) => ($isActive ? "0" : "-100vh")});
  }
`;

const Modal = styled.div`
  background-color: white;
  width: 530px;
  margin: auto;
  border-radius: 24px;
  position: relative;
`;

const StyledModal = {
  Modal,
  Wrapper,
};

export default StyledModal;