import { useLocation } from "react-router-dom";

import { createLink } from "../../../../../helpers/link";
import { Icon } from "../../../../core";

import TLeftMenuItemProps from "./LeftMenuItem.type";
import { useEffect, useState } from "react";
import Styled from './LeftMenuItem.style';

const LeftMenuItem = ({config, isOpen, parentLink = '', isSubMenu}: TLeftMenuItemProps) => {
  const [newLink, setNewLink] = useState('');
  const [isItemActive, setIsItemActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    setIsItemActive(true)
  };

  const onMouseEnter = () => {
    if (!isOpen) {
      setIsHovered(true)
    }
  };

  const onMouseLeave = () => {
    if (!isOpen) {
      setIsHovered(false)
    }
  };

  return (
    <Styled.MainWrapper $isOpen={isOpen}>
      <Styled.NavLinkWrapper 
        $isOpen={isOpen} 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
        onClick={handleClick}
      >
        <Styled.StyledNavLink
          to={newLink}
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
      <Styled.SubMenuWrapper $isItemActive={isItemActive} $isOpen={isOpen} $isHovered={isHovered} id={'submenu-wrapper'}>
        {config.subMenu ? 
          <>
            {!isOpen && <Styled.Title>{config.menuName}</Styled.Title>}
            {config.subMenu.map(subConfig => <LeftMenuItem config={subConfig} parentLink={newLink} key={subConfig.menuName} isOpen={isOpen} isSubMenu={true} />)}
          </>
        : 
          !isOpen && !isSubMenu && <div>{config.menuName}</div>
        }
      </Styled.SubMenuWrapper>
    </Styled.MainWrapper>
  )
};

export default LeftMenuItem