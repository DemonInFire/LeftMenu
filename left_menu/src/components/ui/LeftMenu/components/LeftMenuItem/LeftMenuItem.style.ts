import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SubMenuWrapper = styled.div<{$isItemActive: boolean, $isOpen: boolean, $isScreenSm: boolean}>`
  position: ${({$isOpen}) => $isOpen ? 'static' : 'absolute'};
  left: ${({$isOpen, $isScreenSm}) => $isOpen ? 'auto' : $isScreenSm ? 0 : '74px'};
  bottom: ${({$isScreenSm}) => $isScreenSm ? '67px' : 'auto'};
  flex-direction: column;
  background-color: yellow;
  transition: .5s linear;
  visibility: ${({$isOpen, $isItemActive}) => $isOpen && $isItemActive ? 'visable' : 'hidden'};
  opacity: ${({$isOpen, $isItemActive}) => $isOpen && $isItemActive ? 1 : 0};
  display: ${({$isOpen, $isItemActive}) => ($isOpen && $isItemActive) || !$isOpen ? 'flex' : 'none'};
`;

const MainWrapper = styled.div<{$isOpen: boolean}>`
  display: flex; 
  flex-direction: column; 
  position: relative;
  width: max-content;
  z-index: 10;

  &:hover {
    background-color: grey;

    #submenu-wrapper {
      visibility: ${({$isOpen}) => !$isOpen && 'visible'}; 
      opacity: ${({$isOpen}) => !$isOpen && '1'};
    }
  }
`;

const NavLinkWrapper = styled.div<{$isOpen: boolean}>`
  font-size: 16px;
  padding: 12px;
  border: 1px solid;
  height: 43px;
  text-decoration: none;
  width: ${({$isOpen}) => $isOpen ? '200px' : '50px'};
`;

const Title = styled.h6``;

const StyledNavLink = styled(NavLink)<{$isOpen: boolean, $isItemActive: boolean}>`
  font-size: 16px;
  padding: 12px;
  margin: -12px 0 0 -12px;
  display: flex;
  height: 43px;
  text-decoration: none;
  width: ${({$isOpen}) => $isOpen ? '200px' : '50px'};
  color: ${({$isItemActive}) => $isItemActive ? 'plum' : 'black'};
  background-color: ${({$isItemActive}) => $isItemActive ? 'red' : 'transparent'};
`;

const IconWrapper = styled.div`
  margin: 0 20px;
`;

const StyledLeftMenuItem = {
  SubMenuWrapper,
  MainWrapper,
  NavLinkWrapper,
  Title,
  StyledNavLink,
  IconWrapper,
};

export default StyledLeftMenuItem;