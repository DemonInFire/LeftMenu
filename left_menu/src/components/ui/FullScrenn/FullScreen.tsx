import { Outlet } from "react-router-dom";

import menuConfig from "../../../const/menuConfig";
import { LeftMenu } from "../LeftMenu";

import Styled from './FullScreen.style';

const FullScreen = () => {
  return (
    <Styled.Wrapper>
      <LeftMenu leftMenuConfig={menuConfig}/>
      <Outlet />
    </Styled.Wrapper>
  )
};

export default FullScreen