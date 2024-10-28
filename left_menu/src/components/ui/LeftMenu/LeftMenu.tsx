import { useEffect, useState } from "react";

import { Icon } from "../../core";
import { useResize } from "../../../hooks/useResize";

import { LeftMenuItem } from "./components";
import TLeftMenuProps from "./LeftMenu.type";
import Styled from "./LeftMenu.style";

const LeftMenu = ({leftMenuConfig}: TLeftMenuProps) => {  
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen)
  };

  const { isScreenSm } = useResize();

  useEffect(() => {
    if (isScreenSm) {
      setIsOpen(false)
    }
  }, [isScreenSm]);

  return (
    <Styled.MainWrapper>
      <div>
        <Styled.Wrapper $isScreenSm={isScreenSm}>
          {leftMenuConfig.map(config => <LeftMenuItem config={config} isOpen={isOpen} key={config.menuName} isScreenSm={isScreenSm} />)}
        </Styled.Wrapper>
        {!isScreenSm &&
          <Icon size="s" type="bird" handleClick={handleClick}/>
        }
      </div>
    </Styled.MainWrapper>
  )
};

export default LeftMenu