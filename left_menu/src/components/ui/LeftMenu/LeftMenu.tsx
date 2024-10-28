import { useState } from "react";

import { Icon } from "../../core";

import { LeftMenuItem } from "./components";
import TLeftMenuProps from "./LeftMenu.type";
import Styled from "./LeftMenu.style";

const LeftMenu = ({leftMenuConfig}: TLeftMenuProps) => {  
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen)
  };

  return (
    <Styled.MainWrapper>
      <div>
        <Styled.Wrapper>
          {leftMenuConfig.map(config => <LeftMenuItem config={config} isOpen={isOpen} key={config.menuName} />)}
        </Styled.Wrapper>
        <Icon size="s" type="bird" handleClick={handleClick}/>
      </div>
    </Styled.MainWrapper>
  )
};

export default LeftMenu