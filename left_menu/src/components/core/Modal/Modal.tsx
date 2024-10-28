import { useEffect, useRef } from "react";
import ReactDOM from 'react-dom';

import Styled from "./Modal.style";
import TModalProps from "./Modal.type";

const Modal = ({ isModalOpen, setIsModalOpen, children }: TModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return ReactDOM.createPortal(
      <Styled.Wrapper $isActive={isModalOpen}>
        <Styled.Modal ref={modalRef}>
          {children}
        </Styled.Modal>
      </Styled.Wrapper>
  , document.getElementById('portal')!);
};

export default Modal;