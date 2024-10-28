import { useLocation } from "react-router-dom";

import { createLink } from "../../../../../helpers/link";
import { Icon, Modal } from "../../../../core";

import TLeftMenuItemProps from "./LeftMenuItem.type";
import { useEffect, useState } from "react";
import Styled from './LeftMenuItem.style';

const LeftMenuItem = ({config, isOpen, parentLink = '', isSubMenu, closeModal, isScreenSm}: TLeftMenuItemProps) => {
  const [newLink, setNewLink] = useState('');
  const [isItemActive, setIsItemActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {    
      if (config.menuLink && parentLink.indexOf(config.menuLink) !== -1) {
        setNewLink(parentLink);
      } else {
        const newLink = createLink(config.menuLink ? '' : parentLink, config.menuLink ? config.menuLink : config.subMenu?.[0].menuLink);
      
        setNewLink(newLink);
      }
  }, [parentLink, config.menuLink, config.subMenu]);  

  useEffect(() => { 
    const currentLink = config.menuLink ? config.menuLink : config.subMenu?.[0].menuLink;
    const isActiveLink = !isSubMenu && location.pathname.slice(1, location.pathname.indexOf('/', 1)) === currentLink?.slice(0, currentLink.indexOf('/'));
    const isActiveSublink = isSubMenu && config.menuLink && location.pathname.indexOf(config.menuLink) !== -1
    
    if (isActiveLink || isActiveSublink) {
      setIsItemActive(true)
    } else {
      setIsItemActive(false)
    }
  }, [location.pathname]);

  const handleClick = () => {
    if (isScreenSm && !isSubMenu) {
      setIsModalOpen(true)
    } else if (isSubMenu && closeModal) {
      closeModal()
    } else {
      setIsItemActive(true)
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false)
  };

  const handleTouch = () => {
    setIsModalOpen(true)
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isScreenSm && config.subMenu) {
      e.preventDefault()
    }
  };

  return (
    <>
      {isScreenSm && config.subMenu &&
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}> 
          <>
            {!isOpen && <Styled.Title>{config.menuName}</Styled.Title>}
            {config.subMenu.map(subConfig => <LeftMenuItem 
              config={subConfig} 
              parentLink={newLink} 
              key={subConfig.menuName} 
              isScreenSm={isScreenSm} 
              isOpen={isOpen} 
              closeModal={handleCloseModal}
              isSubMenu 
            />)}
          </>
        </Modal>
      }
      <Styled.MainWrapper $isOpen={isOpen}>
        <Styled.NavLinkWrapper 
          $isOpen={isOpen} 
          onTouchStart={handleTouch}
          onClick={handleClick}
        >
          <Styled.StyledNavLink
            to={newLink}
            onClick={handleNavLinkClick}
            $isItemActive={isItemActive}
            $isOpen={isOpen}
          >
            {isSubMenu ? 
              isOpen && '•' 
            : 
              <Styled.IconWrapper>
                <Icon size="s" type="bird" />
              </Styled.IconWrapper>
            }
            {isOpen || isSubMenu ? config.menuName : ''}
          </Styled.StyledNavLink>
        </Styled.NavLinkWrapper>
        <Styled.SubMenuWrapper $isItemActive={isItemActive} $isOpen={isOpen} $isScreenSm={isScreenSm} id={'submenu-wrapper'}>
          {config.subMenu ? 
            <>
              {!isOpen && !isScreenSm && <Styled.Title>{config.menuName}</Styled.Title>}
              {!isScreenSm && config.subMenu.map(subConfig => <LeftMenuItem 
                config={subConfig} 
                parentLink={newLink} 
                key={subConfig.menuName} 
                isScreenSm={isScreenSm} 
                isOpen={isOpen} 
                isSubMenu 
              />)}
            </>
          : 
            !isOpen && !isSubMenu && !isScreenSm && <div>{config.menuName}</div>
          }
        </Styled.SubMenuWrapper>
      </Styled.MainWrapper>
    </>
  )
};

export default LeftMenuItem